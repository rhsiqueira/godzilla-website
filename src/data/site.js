// Conteúdo central do site: contatos, navegação e textos das seções.
// Alterar aqui reflete em todas as páginas.

export const company = {
    name: 'Godzilla Coleta de Óleo',
    tagline: 'Mais de 10 anos de experiência e parceria com nossos clientes.',
};

export const contact = {
    whatsappLabel: '(11) 94644-7239',
    whatsappShort: '11 94644-7239',
    whatsappUrl: 'https://wa.me/5511946447239',
    phoneLabel: '11 95758-2806',
    phoneUrl: 'tel:+5511957582806',
    email: 'contato@godzillacoletadeoleo.com',
    emailUrl: 'mailto:contato@godzillacoletadeoleo.com',
    instagramLabel: '@godzillacoleta',
    instagramUrl: 'https://www.instagram.com/godzillacoleta?igsh=MXdleTN0enlqN2V4cA==',
};

export const navigation = [
    { to: '/', label: 'Home', end: true },
    { to: '/sobre-nos', label: 'Sobre nós' },
    { to: '/parceiros', label: 'Parceiros' },
    { to: '/fale-conosco', label: 'Fale conosco' },
];

export const disposalSteps = [
    'Deixe o óleo esfriar',
    'Armazene em uma garrafa PET',
    'Feche bem a garrafa',
    'Leve ao ponto de coleta',
];

export const values = [
    {
        title: 'Conscientização',
        text: 'Temos como objetivo levar a conscientização sobre a reciclagem do óleo de cozinha, mostrando alternativas à população através de projetos e parcerias, com muita dedicação e amor.',
        image: '/valores-1.png',
    },
    {
        title: 'Prestação de serviços',
        text: 'Através do trabalho conjunto com nossos parceiros, reciclamos milhares de litros de óleo por mês. Fornecemos o recipiente para armazenamento e trocamos o óleo por produto ou compramos.',
        image: '/valores-2.png',
    },
    {
        title: 'Compromisso',
        text: 'Coletamos em até 48 horas após a solicitação, fornecemos toda a documentação exigida e disponibilizamos recipientes adequados para o armazenamento.',
        image: '/valores-3.png',
    },
];

export const partnerships = [
    {
        id: 'tangara',
        tab: 'Tangará',
        name: 'Tangará Alimentos',
        items: [
            {
                title: 'Documentação',
                text: 'Oferecemos documentação comprovando o destino final ambientalmente responsável do óleo reciclado, assegurando total transparência em nossas operações.',
            },
            {
                title: 'Destino final',
                text: 'Parceria estratégica com a empresa Tangará Alimentos, que atua como nosso destinatário final. Essa colaboração assegura que todo o óleo reciclado seja encaminhado para um destino adequado, em conformidade com as regulamentações ambientais.',
            },
            {
                title: 'Licenças',
                text: 'Licenças de instalação e operação em dia com os órgãos vigentes, conforme necessário para o destino final do óleo.',
            },
        ],
    },
    {
        id: 'espaco-do-gourmet',
        tab: 'Espaço do Gourmet',
        name: 'Espaço do Gourmet',
        items: [
            {
                title: 'Crédito',
                text: 'Parceria única com a Espaço do Gourmet, com mais de 30 anos de mercado. Fornecemos recipientes, coleta e documentação para reciclagem de óleo, gerando crédito para novos utensílios e consertos.',
            },
            {
                title: 'Oficina',
                text: 'Parceria que oferece acesso a uma oficina autorizada de grandes marcas, transformando óleo de cozinha em crédito para conserto de equipamentos, disponível para clientes de food service em geral.',
            },
            {
                title: 'Utensílios',
                text: 'Mais de 9.000 soluções para comércios de food service. Preços acessíveis e crédito gerado com a reciclagem de óleo, podendo ser utilizado para equipar sua cozinha com os melhores utensílios.',
            },
        ],
    },
];

export const team = [
    { name: 'Luis Sávio Santos de Siqueira', image: '/funcionario-01.png' },
    { name: 'Luis Sávio Santos de Siqueira Jr', image: '/funcionario-01.png' },
    { name: 'Rodrigo Holanda de Siqueira', image: '/funcionario-01.png' },
];

export const clients = [
    '/cliente-1.svg',
    '/cliente-2.svg',
    '/cliente-3.svg',
    '/cliente-4.svg',
    '/cliente-5.svg',
];
