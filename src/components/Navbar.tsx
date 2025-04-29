
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/booking', label: t('booking') },
    { to: '/about', label: t('about') },
    { to: '/reviews', label: t('reviews') },
    { to: '/blog', label: t('blog') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">
            Auto Clean Pro
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${
                location.pathname === link.to
                  ? 'text-primary font-semibold'
                  : isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-gray-800 hover:text-primary'
              } transition-colors`}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center text-gray-700 hover:text-primary"
            >
              {i18n.language === 'fr' ? 'FR' : 'EN'}
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white rounded shadow-lg z-10">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => changeLanguage('fr')}
                >
                  Français
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => changeLanguage('en')}
                >
                  English
                </button>
              </div>
            )}
          </div>

          <Link
            to="/account"
            className="bg-primary hover:bg-primary/90 text-white rounded px-4 py-2 transition-colors"
          >
            {t('account')}
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${
                  location.pathname === link.to
                    ? 'text-primary font-semibold'
                    : 'text-gray-700'
                } py-2 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700">{t('language')}</span>
              <div className="flex space-x-4">
                <button
                  className={`${
                    i18n.language === 'fr' ? 'text-primary font-semibold' : 'text-gray-700'
                  }`}
                  onClick={() => changeLanguage('fr')}
                >
                  FR
                </button>
                <button
                  className={`${
                    i18n.language === 'en' ? 'text-primary font-semibold' : 'text-gray-700'
                  }`}
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </button>
              </div>
            </div>

            <Link
              to="/account"
              className="bg-primary hover:bg-primary/90 text-white rounded py-2 px-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('account')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
