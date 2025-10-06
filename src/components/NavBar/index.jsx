import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[99] md:absolute transition-colors duration-300 ${
        transparent ? 'bg-transparent' : 'bg-white text-gray-800 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="">
          <img src="/Telfords-Character-Logo.png" className="md:w-28 w-20" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-2xl tracking-wider hover:text-blue-500 transition-colors font-Bodina-Moda-SC"
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
            className={`h-8 w-8 stroke-white transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between p-4 items-baseline">
              <p className="font-Bodina-Moda-SC text-2xl text-gray-500 pl-2">
                Menu
              </p>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <XMarkIcon className="h-8 w-8 stroke-gray-700" />
              </button>
            </div>
            <nav className="flex flex-col space-y-8 p-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 transition-colors font-Bodina-Moda-SC text-2xl border-t-gray-300 border-t pt-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col pb-10 space-y-8 px-6">
            <div>
              <p className="font-Bodina-Moda-SC text-xl text-gray-800 leading-1 tracking-wide">
                Phone:
              </p>
              <br />
              <a
                href="tel:14153880440"
                className="font-Bodina-Moda-SC text-[1.4rem] text-gray-800 leading-1 tracking-wide underline"
              >
                415-388-0440
              </a>
            </div>
            <div className="border-t-gray-300 border-t pt-8">
              <p className="font-Bodina-Moda-SC text-xl text-gray-800 leading-1 tracking-wide">
                Address:
              </p>
              <br />
              <a
                target="_blank"
                href="https://maps.app.goo.gl/Rn2Woi6tL7kBUgwQ6"
                className="font-Bodina-Moda-SC text-lg text-gray-800 leading-1 tracking-wide underline"
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
