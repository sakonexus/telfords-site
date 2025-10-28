import { useState, useEffect } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline';

const Navbar = ({ homePage = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sections, setSections] = useState({});

  useEffect(() => {
    const handleSection = (e) => {
      const { id, visible } = e.detail;
      setSections((prev) => ({ ...prev, [id]: visible }));
    };

    window.addEventListener('sectionVisible', handleSection);

    return () => {
      window.removeEventListener('sectionVisible', handleSection);
    };
  }, []);

  const heroVisible = sections['hero'] ?? true;

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/about' },
    { name: 'Products', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[99] md:absolute transition-colors duration-300 ${
        homePage && heroVisible === true
          ? 'bg-transparent'
          : 'bg-cream text-gray-800 shadow-md'
      }`}
    >
      <div
        className={`${heroVisible === true ? 'p-4' : 'px-4 py-1'} ${
          homePage ? 'items-center' : 'items-end'
        } max-w-7xl mx-auto flex justify-between transition-all duration-300`}
      >
        {/* Logo */}
        <div className="flex flex-row justify-center items-end">
          <a href="/">
            <img
              src="/Telfords-Character-Logo.png"
              className={`${
                heroVisible === true && homePage === true
                  ? 'md:w-28 w-20'
                  : 'md:w-20 w-12'
              } transition-all`}
            />
          </a>
          <div
            className={`${
              heroVisible === true && homePage === true
                ? 'opacity-0'
                : 'opacity-100'
            } ml-2 transition-opacity duration-300`}
          >
            <p className="font-Baskerville text-lg">
              Telford&#8217;s Pipe & Cigar, inc.
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${
                homePage
                  ? 'text-cream hover:text-hover-cream'
                  : 'text-text-primary hover:text-text-muted'
              } text-2xl tracking-wider  transition-colors font-Bodina-Moda-SC`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Bars3Icon
            className={`${
              heroVisible === true && homePage === true
                ? 'stroke-cream'
                : 'stroke-text-muted'
            } h-8 w-8  transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-cream shadow-lg transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between p-4 items-baseline">
              <p className="font-Bodina-Moda-SC text-2xl text-text-secondary pl-2">
                Menu
              </p>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <XMarkIcon className="h-8 w-8 stroke-text-muted" />
              </button>
            </div>
            <nav className="flex flex-col space-y-8 p-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-primary transition-colors font-Bodina-Moda-SC text-2xl border-t-gray-300 border-t pt-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col pb-10 space-y-8 px-6">
            <div className="flex flex-row items-baseline justify-start gap-x-2">
              <PhoneIcon className="w-6 fill-text-primary stroke-text-primary" />
              <a
                href="tel:14153880440"
                className="font-Bodina-Moda-SC text-xl text-text-primary leading-1 tracking- pt-6"
              >
                415-388-0440
              </a>
            </div>
            <div className="flex flex-row justify-baseline items-start border-t-gray-300 border-t pt-8">
              <span>
                <BuildingStorefrontIcon className="w-6 fill-text-primary stroke-text-primary" />
              </span>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/Rn2Woi6tL7kBUgwQ6"
                className="font-Bodina-Moda-SC text-lg text-text-primary tracking-wide ml-2"
              >
                664 Redwood Highway Frontage Rd, Mill Valley, CA 94941
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
