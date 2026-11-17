import React from 'react';
const links = [
  ['inicio', 'In\u00edcio'], ['sobre', 'Sobre'], ['tecnologias', 'Tecnologias'],
  ['projetos', 'Projetos'], ['contato', 'Contato'],
];

export function Navigation({ active, onNavigate }) {
  return <nav className="site-nav" aria-label="Menu principal">
    {links.map(([id, label], index) => <a key={id} href={`#${id}`} className={active === index ? 'active' : ''} aria-current={active === index ? 'location' : undefined} onClick={(event) => { event.preventDefault(); onNavigate(index); }}>{label}</a>)}
  </nav>;
}

export function SectionDots({ active, onNavigate }) {
  return <div className="dots" aria-label="Navega&#231;&#227;o por se&#231;&#227;o">
    {links.map(([id, label], index) => <button key={id} type="button" className={active === index ? 'on' : ''} title={label} aria-label={`Ir para ${label}`} aria-current={active === index ? 'true' : undefined} onClick={() => onNavigate(index)} />)}
  </div>;
}
