function Header({ openModal }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm" data-name="header" data-file="components/Header.js">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20 ">
                <img src="components/imagem/img1.png" alt="Wi-Fi Portátil" className="rounded-3xl shadow-2xl"/>
              </div>
              <span className="text-2xl font-bold" style={{color: 'var(--primary-color)'}}>Conecta Wi-Fi De Bolso</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">Recursos</button>
              <button onClick={() => scrollToSection('plans')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">Planos</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">Como Funciona</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">Depoimentos</button>
              <button onClick={() => openModal()} className="btn-primary">Contratar Agora</button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl`} style={{color: 'var(--primary-color)'}}></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-[var(--text-light)]">Recursos</button>
              <button onClick={() => scrollToSection('plans')} className="block w-full text-left py-2 text-[var(--text-light)]">Planos</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2 text-[var(--text-light)]">Como Funciona</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-[var(--text-light)]">Depoimentos</button>
              <button onClick={() => openModal()} className="btn-primary w-full">Contratar Agora</button>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}