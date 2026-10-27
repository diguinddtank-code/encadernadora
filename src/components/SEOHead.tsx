import { useEffect } from 'react';

interface SEOHeadProps {
  currentPath: string;
}

const PAGE_METADATA: Record<string, { title: string; description: string; canonical: string }> = {
  '/': {
    title: 'Encadernadora JR | Encadernação de Capa Dura e TCC no Mercado Novo BH',
    description: 'Oficina de encadernação de capa dura, TCCs e teses ABNT, livros fiscais, diário razão e cardápios. Mais de 20 anos de tradição no Mercado Novo em Belo Horizonte.',
    canonical: 'https://encadernadorajr.com.br/'
  },
  '/sobre': {
    title: 'Sobre Nós - Mais de 20 Anos de História no Mercado Novo | Encadernadora JR',
    description: 'Conheça a história da Encadernadora JR no Mercado Novo em Belo Horizonte. Mais de duas décadas dedicadas à arte manual, capa dura nobre e normas ABNT.',
    canonical: 'https://encadernadorajr.com.br/sobre'
  },
  '/servicos': {
    title: 'Serviços de Encadernação, Capa Dura e TCC em BH | Encadernadora JR',
    description: 'Confira nossos serviços: encadernação de capa dura, TCC, teses ABNT, livros fiscais, porta diplomas, cardápios para restaurantes e restaurações em BH.',
    canonical: 'https://encadernadorajr.com.br/servicos'
  },
  '/contato': {
    title: 'Contato, Endereço & Onde Estamos no Mercado Novo | Encadernadora JR',
    description: 'Como chegar na Encadernadora JR no Mercado Novo (Loja 1249, Corredor O, 2º piso). Telefone (31) 98770-2774, horário de funcionamento e rota no Google Maps.',
    canonical: 'https://encadernadorajr.com.br/contato'
  }
};

export default function SEOHead({ currentPath }: SEOHeadProps) {
  useEffect(() => {
    const meta = PAGE_METADATA[currentPath] || PAGE_METADATA['/'];
    
    // Update Title
    document.title = meta.title;

    // Update Meta Description
    let descElem = document.querySelector('meta[name="description"]');
    if (!descElem) {
      descElem = document.createElement('meta');
      descElem.setAttribute('name', 'description');
      document.head.appendChild(descElem);
    }
    descElem.setAttribute('content', meta.description);

    // Update Canonical
    let canonicalElem = document.querySelector('link[rel="canonical"]');
    if (!canonicalElem) {
      canonicalElem = document.createElement('link');
      canonicalElem.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElem);
    }
    canonicalElem.setAttribute('href', meta.canonical);

    // Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', meta.canonical);

  }, [currentPath]);

  return null;
}
