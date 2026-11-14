/*
 * Pré-renderização para buscadores (SEO).
 *
 * Roda depois do `react-scripts build`. Renderiza a página em HTML estático e
 * grava em build/index.html, para que Google, WhatsApp e outros robôs leiam o
 * conteúdo sem precisar executar JavaScript. No navegador, o React "hidrata"
 * esse HTML (ver src/index.js).
 *
 * Também gera, a partir de src/data/site.js:
 *  - dados estruturados (negócio local e perguntas frequentes) para o Google;
 *  - link canônico, sitemap.xml e robots.txt, quando `siteUrl` está preenchido.
 */
process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const root = path.resolve(__dirname, '..');
const buildDir = path.join(root, 'build');
const srcDir = path.join(root, 'src') + path.sep;

// Permite ao Node carregar os componentes do site: compila JSX/ESM com a
// mesma configuração do Create React App e ignora os arquivos de estilo.
const compile = (module, filename) => {
    const { code } = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
        filename,
        babelrc: false,
        configFile: false,
        presets: [require.resolve('babel-preset-react-app')],
        plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
    });
    module._compile(code, filename);
};
const defaultJsLoader = require.extensions['.js'];
require.extensions['.jsx'] = compile;
require.extensions['.js'] = (module, filename) =>
    filename.startsWith(srcDir) ? compile(module, filename) : defaultJsLoader(module, filename);
require.extensions['.css'] = () => {};

const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../src/App').default;
const site = require('../src/data/site');

const siteUrl = (site.siteUrl || '').replace(/\/+$/, '');
const absolute = (file) => (siteUrl ? `${siteUrl}${file}` : file);

// ---------- Dados estruturados (schema.org) ----------

const business = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.company.name,
    description: site.seo.description,
    image: absolute('/foto-luis.jpg'),
    logo: absolute('/LogoSimbolo.png'),
    telephone: '+55 11 94644-7239',
    email: site.contact.email,
    priceRange: 'R$',
    areaServed: [
        { '@type': 'City', name: 'São Paulo' },
        { '@type': 'State', name: 'São Paulo' },
    ],
    address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
    sameAs: [site.contact.instagramUrl.split('?')[0]],
    knowsAbout: site.seo.topics,
    makesOffer: {
        '@type': 'Offer',
        itemOffered: {
            '@type': 'Service',
            name: 'Coleta de óleo de cozinha usado',
            serviceType: 'Coleta e reciclagem de óleo vegetal usado',
            audience: { '@type': 'BusinessAudience', name: site.audiences.join(', ') },
        },
    },
    ...(siteUrl && { url: siteUrl, '@id': `${siteUrl}/#empresa` }),
};

const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: site.faq.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
};

const jsonLd = (data) =>
    `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

// ---------- Monta o HTML final ----------

const indexPath = path.join(buildDir, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

if (!html.includes('<div id="root"></div>')) {
    throw new Error('prerender: <div id="root"></div> não encontrado em build/index.html');
}

const headExtras = [
    jsonLd(business),
    jsonLd(faqPage),
    siteUrl && `<link rel="canonical" href="${siteUrl}/"/>`,
    siteUrl && `<meta property="og:url" content="${siteUrl}/"/>`,
]
    .filter(Boolean)
    .join('');

html = html
    .replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App))}</div>`)
    .replace('</head>', `${headExtras}</head>`);

if (siteUrl) {
    // A imagem de prévia (WhatsApp, redes sociais) precisa de endereço completo.
    html = html.replace(/(<meta property="og:image" content=")([^"]+)"/, `$1${siteUrl}$2"`);

    const today = new Date().toISOString().slice(0, 10);
    fs.writeFileSync(
        path.join(buildDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
            `  <url><loc>${siteUrl}/</loc><lastmod>${today}</lastmod></url>\n</urlset>\n`
    );
    fs.appendFileSync(path.join(buildDir, 'robots.txt'), `\nSitemap: ${siteUrl}/sitemap.xml\n`);
}

fs.writeFileSync(indexPath, html);
console.log(
    `prerender: build/index.html gerado com conteúdo estático` +
        (siteUrl ? ` (canônico: ${siteUrl}/)` : ' (siteUrl vazio: sem canônico e sem sitemap)')
);
