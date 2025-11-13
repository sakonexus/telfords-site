import { useState, useEffect, useRef } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline';
import MobileNavLink from './MobileNavLink';

const Navbar = ({ homePage = false, logoImg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sections, setSections] = useState({});
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleSection = (e) => {
      const { id, visible } = e.detail;
      setSections((prev) => ({ ...prev, [id]: visible }));
    };

    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      // Disable background scroll
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }

    window.addEventListener('sectionVisible', handleSection);

    return () => {
      window.removeEventListener('sectionVisible', handleSection);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const heroVisible = sections['hero'] ?? true;

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/about' },
    {
      name: 'Products',
      href: '/products',
      submenu: [
        {
          name: 'Pipes',
          href: '/products/pipes',
        },
        {
          name: 'Cigars',
          href: '/products/cigars',
        },
        {
          name: 'Tobacco',
          href: '/products/tobacco',
        },
        {
          name: 'Accessories',
          href: '/products/accessories',
        },
      ],
    },
    {
      name: 'Events',
      href: '/events',
    },
    {
      name: 'Membership',
      href: '/membership',
    },
    {
      name: 'Pipe Club',
      href: '/pipe-club',
    },
  ];

  return (
    <div className="relative">
      <nav
        className={`${
          heroVisible && homePage ? 'absolute' : 'fixed'
        }  top-0 left-0 w-full z-[99] transition-colors duration-300 ${
          homePage && heroVisible
            ? 'bg-transparent'
            : 'bg-nav-bg text-gray-800 shadow-sm'
        }`}
      >
        <div
          className={`${heroVisible === true ? 'p-2' : 'px-4 py-1'} ${
            homePage ? 'items-center' : 'items-end'
          } max-w-7xl mx-auto flex justify-between transition-all duration-300`}
        >
          <div className="flex flex-row justify-center items-end">
            <a href="/" aria-label="Home page">
              <img
                src={logoImg.src}
                className={`${
                  heroVisible === true && homePage === true
                    ? 'md:w-28 w-20'
                    : 'md:w-20 w-12'
                } transition-all`}
                alt="Telford's Pipe & Tobacco inc."
              />
            </a>
            <div
              className={`${
                heroVisible && homePage ? 'opacity-0' : 'opacity-100'
              } ml-2 transition-opacity duration-300`}
            >
              <p className="font-Lora md:text-xl xs:text-md">
                Telford&#8217;s Pipe & Cigar, inc.
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 relative">
            {links.map((link) =>
              link.submenu ? (
                <div
                  key={`${'nav-' + link.name + '-desktop'}`}
                  className="group relative"
                >
                  <a
                    aria-label="Products"
                    href={link.name == 'Products' ? '#' : link.href}
                    className={`${
                      homePage && heroVisible
                        ? 'text-cream hover:text-hover-cream'
                        : 'text-text-primary hover:text-text-muted'
                    } text-2xl tracking-wider transition-colors font-Bodina-Moda-SC`}
                  >
                    {link.name}
                  </a>

                  {/* Dropdown submenu */}
                  <div
                    className={`absolute left-0 top-full hidden w-48 rounded-md bg-nav-bg shadow-md opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-200`}
                  >
                    <ul className="flex flex-col">
                      {link.submenu.map((sub, index) => (
                        <li key={`${'nav-' + sub.name + '-desktop'}`}>
                          <a
                            href={sub.href}
                            aria-label={sub.name + ' ' + 'link'}
                            className={`block px-4 py-2 text-text-primary hover:bg-hover-cream transition-colors ${
                              index === 0
                                ? 'rounded-tl-md rounded-tr-md'
                                : index == link.submenu.length - 1
                                ? 'rounded-bl-md rounded-br-md'
                                : 'rounded-none'
                            }`}
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a
                  key={`${'nav-' + link.name + '-desktop'}`}
                  aria-label={link.name + ' ' + 'link'}
                  href={link.href}
                  className={`${
                    homePage && heroVisible
                      ? 'text-cream hover:text-hover-cream'
                      : 'text-text-primary hover:text-text-muted'
                  } text-2xl tracking-wider transition-colors font-Bodina-Moda-SC`}
                >
                  {link.name}
                </a>
              )
            )}
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
          ref={mobileMenuRef}
          className={`fixed top-0 right-0 h-dvh w-64 bg-nav-bg shadow-md transform transition-transform duration-300 md:hidden overflow-scroll ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }
          `}
        >
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex justify-end p-4 items-baseline absolute top-0 right-0">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6 stroke-text-muted" />
                </button>
              </div>
              <div className="flex flex-col px-6 space-y-4 mt-4">
                {links.map((link, index) => (
                  <div
                    className="flex flex-col"
                    key={`${'nav-' + link.name + '-mobile'}`}
                  >
                    <MobileNavLink
                      onClick={() => setIsOpen(false)}
                      index={index}
                      link={link.name == 'Products' ? '#' : link.href}
                    >
                      {link.name}
                    </MobileNavLink>
                    <ul
                      className={`mobile-nav flex flex-col ml-4 gap-y-4 mt-2 ${
                        link.submenu ? 'block' : 'hidden'
                      }`}
                    >
                      {link.submenu
                        ? link.submenu.map((menuItem) => {
                            return (
                              <li key={`${'nav-' + menuItem.name + '-mobile'}`}>
                                <a
                                  className="pt-4 text-md"
                                  href={menuItem.href}
                                  aria-label={menuItem.name + ' ' + 'link'}
                                >
                                  {menuItem.name}
                                </a>
                              </li>
                            );
                          })
                        : null}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col pb-10 px-6 mt-16">
              <h2 className="font-Bodina-Moda-SC text-lg text-text-primary hover:text-text-muted">
                Contact us
              </h2>
              <div className="flex flex-row items-baseline justify-start gap-x-2 space-y-8 pt-4">
                <PhoneIcon className="w-6 fill-text-primary stroke-text-primary" />
                <a
                  aria-label="Telford's Phone Number"
                  href="tel:14153880440"
                  className="font-Bodina-Moda-SC text-md text-text-primary leading-1 pt-6"
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
                  aria-label="Telford's Address"
                  href="https://maps.app.goo.gl/Rn2Woi6tL7kBUgwQ6"
                  className="font-Bodina-Moda-SC text-md text-text-primary tracking-wide ml-2"
                >
                  664 Redwood Highway Frontage Rd, Mill Valley, CA 94941
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
