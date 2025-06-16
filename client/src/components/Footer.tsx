const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white relative overflow-hidden pt-12">
      <div className="container-custom flex flex-col items-center">
        <img src="/reo-consultoria.webp" alt="R&O Consultoria Estratégica" className="h-12 mb-4" />
        <p className="text-sm text-white/80 mb-2">© {currentYear} R&O Consultoria Estratégica. Todos os direitos reservados.</p>
        <nav className="flex gap-4 mb-4">
          <a href="#hero" className="hover:text-accent transition-colors">Início</a>
          <a href="#quem-somos" className="hover:text-accent transition-colors">Quem somos</a>
          <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
          <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
        </nav>
        <p className="text-xs text-white/60 mt-2">
          Desenvolvido por <a href="https://andersonnarciso.dev.br" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:text-accent/80">Anderson Narciso</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
