import React from 'react';

const technologies = [
  { icon: 'javascript', title: 'JavaScript', description: 'L\u00f3gica, DOM e consumo de APIs.' },
  { icon: 'html', title: 'HTML', description: 'P\u00e1ginas sem\u00e2nticas e acess\u00edveis.' },
  { icon: 'css', title: 'CSS', description: 'Layouts responsivos, mobile-first.' },
  { icon: 'react', title: 'React', description: 'Componentes, rotas e estado.' },
  { icon: 'python', title: 'Python', description: 'Automa\u00e7\u00e3o e interfaces com CustomTkinter.' },
  { icon: 'database', title: 'Banco de dados', description: 'Modelagem e consultas.' },
];

const projects = [
  { name: 'CEPSEARCH', description: 'Projeto desenvolvido para buscar informa\u00e7\u00f5es de um CEP utilizando a API ViaCEP.', tags: 'JavaScript, React', url: 'https://github.com/andreyPRdev/cepsearch' },
  { name: 'MECRO', description: 'Esse projeto foi feito como forma de praticar l\u00f3gica de programa\u00e7\u00e3o e manipula\u00e7\u00e3o do DOM com JavaScript, al\u00e9m de aplicar conhecimentos b\u00e1sicos de desenvolvimento web.', tags: 'HTML, CSS, JavaScript', url: 'https://github.com/andreyPRdev/ProjetoSA' },
  { name: 'ANDREYPERT\u00d3RIOS', description: 'Plataforma web que utiliza intelig\u00eancia artificial para auxiliar na pesquisa de repert\u00f3rios, facilitando a busca por refer\u00eancias e ideias para diferentes temas.', tags: 'JavaScript, React', url: 'https://github.com/andreyPRdev/Andreypertorios' },
  { name: 'APIDEX', description: 'Projeto desenvolvido com React, JavaScript, HTML e CSS, utilizando a Pok\u00e9API para consumir dados dos Pok\u00e9mon e criar um card personalizado com meus favoritos. Foco em integra\u00e7\u00e3o de APIs e desenvolvimento front-end.', tags: 'React, Banco de dados', url: 'https://github.com/Andrey-p-rodrigues/pokemon' },
];

function TechIcon({ name }) {
  const common = { viewBox: '0 0 48 48', role: 'img', 'aria-hidden': true };
  if (name === 'javascript') return <svg {...common}><rect x="3" y="3" width="42" height="42" rx="5" fill="#F7DF1E" /><path fill="#252525" d="M25 35.5c.9 1.5 2 2.3 3.9 2.3 1.6 0 2.6-.8 2.6-1.9 0-1.3-1-1.8-2.8-2.6l-1-.4c-2.9-1.2-4.8-2.8-4.8-6.1 0-3 2.3-5.3 5.9-5.3 2.6 0 4.5.9 5.9 3.3l-3.2 2.1c-.7-1.2-1.4-1.7-2.6-1.7-1.1 0-1.8.7-1.8 1.6 0 1.1.7 1.6 2.4 2.3l1 .4c3.4 1.5 5.3 3 5.3 6.4 0 3.7-2.9 5.7-6.8 5.7-3.8 0-6.2-1.8-7.4-4.2zm-14.2.4c.6 1.1 1.2 2 2.6 2 1.3 0 2.1-.5 2.1-2.4V21.8h4.2v13.8c0 4.5-2.6 6.5-6.2 6.5-3.3 0-5.2-1.7-6.2-3.8z" /></svg>;
  if (name === 'html') return <svg {...common}><path fill="#E44D26" d="M7 3h34l-3.1 35.3L24 43 10.1 38.3z" /><path fill="#F16529" d="M24 6H11l2.5 29.5L24 39z" /><path fill="#EBEBEB" d="M34.5 13H16l.5 4.5h17.5l-1.3 14.1L24 34.3l-8.3-2.7-.5-5.2h4.6l.3 2.4 3.9 1.2 5.2-1.7.5-5.9H14.9l-1.2-13h21.2z" /><path fill="#fff" d="M24 13h10.5l-.5 4.5H24v-4.5zm0 9.4h8.1l-.8 9.2-7.3 2.7v-4.8l3.5-1.2.3-2.4H24z" /></svg>;
  if (name === 'css') return <svg {...common}><path fill="#1572B6" d="M7 3h34l-3.1 35.3L24 43 10.1 38.3z" /><path fill="#33A9DC" d="M24 6H11l2.5 29.5L24 39z" /><path fill="#EBEBEB" d="M34.5 13H16l.5 4.5h17.5l-.5 4.5H17l.4 4.5h11.6l-.4 4.1-4.6 1.5-4.5-1.5-.3-2.7h-4.5l.6 6.1 8.7 2.8 8.6-2.8z" /><path fill="#fff" d="M24 13h10.5l-.5 4.5H24v-4.5zm0 9h8.1l-.5 4.5H24V22z" /></svg>;
  if (name === 'react') return <svg {...common} fill="none" stroke="#61DAFB" strokeWidth="2"><circle cx="24" cy="24" r="3.5" fill="#61DAFB" stroke="none" /><ellipse cx="24" cy="24" rx="21" ry="8.5" /><ellipse cx="24" cy="24" rx="21" ry="8.5" transform="rotate(60 24 24)" /><ellipse cx="24" cy="24" rx="21" ry="8.5" transform="rotate(120 24 24)" /></svg>;
  if (name === 'python') return <svg {...common}><path fill="#3776AB" d="M23.7 4c-10 0-9.4 4.3-9.4 4.3v4.5h9.6v1.4H10.5S4 13.5 4 23.7s5.7 9.8 5.7 9.8h3.4v-4.8s-.2-5.7 5.6-5.7h9.6s5.4.1 5.4-5.2V9.2S34.5 4 23.7 4zm-5.3 3a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4z" /><path fill="#FFD43B" d="M24.3 44c10 0 9.4-4.3 9.4-4.3v-4.5h-9.6v-1.4h13.4s6.5.7 6.5-9.5-5.7-9.8-5.7-9.8h-3.4v4.8s.2 5.7-5.6 5.7h-9.6s-5.4-.1-5.4 5.2v8.6S13.5 44 24.3 44zm5.3-3a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4z" /></svg>;
  return <svg {...common} fill="none" stroke="#FFF9DE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="24" cy="10" rx="17" ry="6" /><path d="M7 10v14c0 3.3 7.6 6 17 6s17-2.7 17-6V10M7 17c0 3.3 7.6 6 17 6s17-2.7 17-6M7 24v14c0 3.3 7.6 6 17 6s17-2.7 17-6V24" /></svg>;
}

function Section({ id, className, children, clone = false, ...props }) {
  return <section className={`s ${className}`} id={clone ? undefined : id} aria-hidden={clone || undefined} {...props}>{children}</section>;
}

export function HeroSection(props) {
  return <Section {...props} id="inicio" className="hero">
    <h1>Port<br />f&oacute;lio</h1>
    <p className="nome">Andrey Pereira Rodrigues</p>
    <p className="cargo">Desenvolvedor Full Stack em forma&ccedil;&atilde;o</p>
  </Section>;
}
export function AboutSection(props) {
  return <Section {...props} id="sobre" className="sobre">
    <h2>Quem<br />sou eu</h2>
    <div className="linha">
      <div className="caixa">
        <span className="sobre-label">PERFIL PROFISSIONAL</span>
        <p className="sobre-destaque">Desenvolvedor Full Stack em forma&ccedil;&atilde;o, interessado em criar solu&ccedil;&otilde;es web funcionais e acess&iacute;veis.</p>
        <p>Atualmente curso Desenvolvimento de Sistemas no SENAI Palho&ccedil;a. Desenvolvo projetos do front-end ao back-end, utilizando tecnologias como HTML, CSS, JavaScript, React e Node.js.</p>
        <p>Tenho interesse em construir interfaces intuitivas, integrar APIs e transformar requisitos em aplica&ccedil;&otilde;es pr&aacute;ticas. Busco evoluir continuamente por meio de projetos e novos desafios em tecnologia.</p>
        <div className="sobre-tags" aria-label="Principais tecnologias">
          <span>HTML &amp; CSS</span><span>JavaScript</span><span>React</span><span>Node.js</span>
        </div>
      </div>
      <div className="about-photo">
        <img className="foto" src="/andrey.jpg" alt="Foto de Andrey Pereira Rodrigues" />
        <span>Andrey Pereira Rodrigues</span>
      </div>
    </div>
  </Section>;
}

export function TechnologiesSection(props) {
  return <Section {...props} id="tecnologias" className="tec"><h2>O que eu<br />domino</h2><div className="grade">{technologies.map((technology) => <article key={technology.title}><TechIcon name={technology.icon} /><div><h3>{technology.title}</h3><p>{technology.description}</p></div></article>)}</div></Section>;
}

function ProjectCard({ project }) {
  return <a className="card" href={project.url} target="_blank" rel="noreferrer"><span className="thumb" aria-hidden="true"><svg viewBox="0 0 48 48" focusable="false"><path d="M5 11a4 4 0 0 1 4-4h10l5 5h15a4 4 0 0 1 4 4v2H12a5 5 0 0 0-4.8 3.6L5 30V11Z" /><path d="M8 22a4 4 0 0 1 4-3h29l-5 18a4 4 0 0 1-3.9 3H8a4 4 0 0 1-3.9-5L8 22Z" /></svg></span><div><h3>{project.name}</h3><p>{project.description}</p><p className="tags">{project.tags}</p></div></a>;
}

export function ProjectsSection(props) {
  return <Section {...props} id="projetos" className="proj"><h2>Projetos</h2><div className="grade">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div></Section>;
}

function ContactIcon({ type }) {
  const common = { viewBox: '0 0 24 24', 'aria-hidden': true, focusable: 'false' };
  if (type === 'whatsapp') return <svg {...common}><path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.5 23.5l6-1.6A11.8 11.8 0 1 0 20.5 3.5ZM12 21a9 9 0 0 1-4.6-1.3l-.4-.2-3.4.9.9-3.3-.2-.4A9 9 0 1 1 12 21Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.2l-.9 1.1c-.2.2-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.3 3.9.6.3 1.1.4 1.5.5.6.2 1.2.1 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3Z" /></svg>;
  if (type === 'email') return <svg {...common}><path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l9 5.8 9-5.8V7H3Zm18 10V9.8l-8.5 5.5a1 1 0 0 1-1.1 0L3 9.8V17h18Z" /></svg>;
  if (type === 'github') return <svg {...common}><path d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.5 4 18.5 4.3 18.5 4.3c.6 1.7.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2.2V22c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8Z" /></svg>;
  return <svg {...common}><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9h3v10ZM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-4.9c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V19H9.5V9h2.9v1.4h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.6 2 3.6 4.6V19Z" /></svg>;
}

const contactLinks = [
  { label: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/5548984430593' },
  { label: 'E-mail', icon: 'email', href: 'mailto:andreypereira3462@gmail.com' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/andreyPRdev' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/andrey-pereira-rodrigues/' },
];

export function ContactSection(props) {
  return <Section {...props} id="contato" className="cont"><h2>Vamos<br />conversar</h2><div className="links">{contactLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}><ContactIcon type={link.icon} />{link.label}</a>)}</div><small>&copy; 2026 Andrey Pereira Rodrigues</small></Section>;
}
