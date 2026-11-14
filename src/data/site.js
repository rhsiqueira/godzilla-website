// Conteúdo central da landing page: contatos, números e textos das seções.
// Alterar aqui reflete em toda a página.

const WHATSAPP_NUMBER = '5511946447239';

// Monta o link do WhatsApp já com a mensagem preenchida.
export const whatsappLink = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const messages = {
    schedule:
        'Olá! Vim pelo site e quero agendar uma coleta de óleo.\nEmpresa: \nEndereço: \nLitros por mês (aprox.): ',
    credit: 'Quero saber mais sobre o crédito na Espaço do Gourmet.',
    pix: 'Olá! Vim pelo site e quero negociar o valor do óleo no Pix.\nLitros por mês (aprox.): ',
    portal: 'Olá! Quero acesso antecipado ao Portal do Cliente Godzilla.\nEmpresa: ',
};

// Endereço público do site, sem barra no final (ex.: 'https://www.exemplo.com.br').
// Quando preenchido, o build gera link canônico, sitemap.xml e a imagem de
// prévia com endereço completo. Ver scripts/prerender.js.
export const siteUrl = 'https://godzillacoletadeoleo.com.br';

// Textos usados nos metadados e nos dados estruturados para buscadores.
export const seo = {
    description:
        'Coleta de óleo de cozinha usado em São Paulo para restaurantes, lanchonetes, padarias e hotéis. Coleta em até 48h, recipientes grátis, R$ 4 por litro em crédito e certificado de destinação.',
    topics: [
        'Coleta de óleo de cozinha usado',
        'Reciclagem de óleo vegetal',
        'Compra de óleo de fritura usado',
        'Certificado de destinação de óleo',
    ],
};

export const company = {
    name: 'Godzilla Coleta de Óleo',
    coverage: 'Toda a capital de São Paulo e cidades do interior',
};

export const contact = {
    whatsappLabel: '(11) 94644-7239',
    phoneLabel: '(11) 95758-2806',
    phoneUrl: 'tel:+5511957582806',
    email: 'contato@godzillacoletadeoleo.com.br',
    emailUrl: 'mailto:contato@godzillacoletadeoleo.com.br',
    instagramLabel: '@godzillacoleta',
    instagramUrl: 'https://www.instagram.com/godzillacoleta?igsh=MXdleTN0enlqN2V4cA==',
};

export const navigation = [
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#espaco-do-gourmet', label: 'Espaço do Gourmet' },
    { href: '#documentacao', label: 'Documentação' },
    { href: '#portal', label: 'Portal' },
    { href: '#duvidas', label: 'Dúvidas' },
];

export const audiences = ['Restaurantes', 'Lanchonetes', 'Padarias', 'Hotéis'];

// Regras comerciais usadas nos textos e no simulador.
export const credit = {
    perLiter: 4,
    minLiters: 50,
    maxLiters: 1000,
    defaultLiters: 100,
};

// Etapas do rastreio ilustrativo exibido no topo da página.
export const trackingSteps = [
    'Coleta solicitada',
    'Coleta agendada',
    'Óleo coletado',
    'Certificado emitido',
    'Crédito liberado',
];

// `value` numérico ganha animação de contagem; `text` é exibido como está.
export const stats = [
    { prefix: '+', value: 12, label: 'anos de mercado' },
    { prefix: '+', value: 110, label: 'clientes ativos' },
    { prefix: '+', value: 6, suffix: ' mil', label: 'litros de óleo por mês' },
    { value: 48, suffix: 'h', label: 'prazo máximo de coleta' },
    { text: 'SP', label: 'capital e interior' },
];

export const howItWorks = [
    {
        title: 'Você chama no WhatsApp',
        text: 'Informe seu endereço e o volume aproximado de óleo que seu comércio gera por mês.',
    },
    {
        title: 'Entregamos os recipientes',
        text: 'As bombonas para armazenar o óleo são fornecidas pela Godzilla, sem custo.',
    },
    {
        title: 'Coletamos em até 48h',
        text: 'Quando os recipientes estiverem cheios, é só solicitar. Nossa equipe autorizada vai até você.',
    },
    {
        title: 'Você recebe pelo óleo',
        text: 'Em crédito ou Pix, junto com o certificado de destinação da coleta.',
    },
];

export const gourmetBenefits = [
    {
        highlight: 'R$ 4',
        title: 'por litro, valor fixo',
        text: 'O valor mais alto que você recebe pelo seu óleo usado.',
    },
    {
        highlight: '+9 mil',
        title: 'itens para o seu comércio',
        text: 'Utensílios e equipamentos para food service, de panelas a fritadeiras.',
    },
    {
        highlight: 'Oficina',
        title: 'assistência técnica especializada',
        text: 'Use o crédito para consertar seus equipamentos em oficina autorizada de grandes marcas.',
    },
];

export const creditConditions = [
    'Sem validade: o crédito não expira.',
    'Liberado logo após a coleta, com a emissão do certificado.',
    'Vale para utensílios e para manutenção de equipamentos.',
    'Mínimo de 50 litros por coleta, ou seja, pelo menos R$ 200 em crédito.',
];

export const paymentOptions = [
    {
        id: 'credito',
        featured: true,
        tag: 'Rende mais',
        title: 'Crédito Espaço do Gourmet',
        value: 'R$ 4/litro',
        text: 'Valor fixo, sem validade, para utensílios e assistência técnica.',
        action: 'Quero receber em crédito',
        message: 'schedule',
    },
    {
        id: 'pix',
        title: 'Pix',
        value: 'A negociar',
        text: 'Pagamento em dinheiro, com valor negociado conforme o volume coletado.',
        action: 'Negociar valor',
        message: 'pix',
    },
    {
        id: 'produto',
        title: 'Troca por produto',
        value: 'Sob consulta',
        text: 'Se preferir, o óleo coletado pode ser trocado por produtos.',
        action: 'Consultar opções',
        message: 'schedule',
    },
];

// Caminho do óleo até a destinadora final (Retióleo).
export const oilJourney = [
    { title: 'Coleta', text: 'A equipe Godzilla retira o óleo no seu comércio.' },
    { title: 'Transporte', text: 'O óleo segue para a Retióleo, nossa destinadora final.' },
    { title: 'Tratamento', text: 'O resíduo é tratado na sede da destinadora.' },
    { title: 'Novo uso', text: 'Vira biodiesel, massa de vidraceiro e produtos de limpeza.' },
    { title: 'Certificado', text: 'Você recebe o certificado de destinação da coleta.' },
];

// Dados de exemplo do mockup do Portal do Cliente (ilustrativos).
export const portalPreview = {
    months: [
        { label: 'Jun', liters: 90 },
        { label: 'Jul', liters: 110 },
        { label: 'Ago', liters: 100 },
        { label: 'Set', liters: 130 },
        { label: 'Out', liters: 120 },
        { label: 'Nov', liters: 150 },
    ],
    certificates: [
        { number: 'GZ-2026-000123', date: '10/11/2026', liters: 150 },
        { number: 'GZ-2026-000098', date: '08/10/2026', liters: 120 },
        { number: 'GZ-2026-000071', date: '05/09/2026', liters: 130 },
    ],
};

export const portalFeatures = [
    'Histórico de coletas com data, litros e status',
    'Certificados de destinação para baixar quando quiser',
    'Ganhos por crédito e Pix, no mês e no acumulado',
    'Contrato e documentos sempre à mão',
];

export const clients = [
    '/cliente-1.svg',
    '/cliente-2.svg',
    '/cliente-3.svg',
    '/cliente-4.svg',
    '/cliente-5.svg',
];

export const team = [
    { name: 'Luis Sávio Santos de Siqueira', image: '/funcionario-01.png' },
    { name: 'Luis Sávio Santos de Siqueira Jr', image: '/funcionario-01.png' },
    { name: 'Rodrigo Holanda de Siqueira', image: '/funcionario-01.png' },
];

export const faq = [
    {
        question: 'Tem volume mínimo para a coleta?',
        answer: 'Sim, o mínimo é de 50 litros por coleta.',
    },
    {
        question: 'Quais regiões vocês atendem?',
        answer: 'Toda a capital de São Paulo e cidades do interior do estado.',
    },
    {
        question: 'Quanto eu recebo pelo óleo?',
        answer: 'R$ 4 por litro em crédito na Espaço do Gourmet. No Pix, o valor é negociado conforme o volume.',
    },
    {
        question: 'O crédito tem validade?',
        answer: 'Não. O crédito na Espaço do Gourmet não expira.',
    },
    {
        question: 'Quando o crédito fica disponível?',
        answer: 'Logo após a coleta. O certificado é emitido e enviado à Espaço do Gourmet, e o crédito já pode ser usado.',
    },
    {
        question: 'Preciso comprar os recipientes?',
        answer: 'Não. A Godzilla fornece as bombonas de armazenamento sem custo.',
    },
    {
        question: 'Em quanto tempo vocês coletam?',
        answer: 'Em até 48 horas após a solicitação.',
    },
    {
        question: 'Recebo algum documento da coleta?',
        answer: 'Sim. Toda coleta gera um certificado de destinação, que comprova o destino ambientalmente correto do óleo.',
    },
];
