// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Drum } from 'lucide-react'; // Импортируем Drum из lucide-react

interface MenuItem {
  href: string;
  title: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [headerHidden, setHeaderHidden] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY: number = window.scrollY;
      setScrolled(currentScrollY > 50);
      setHeaderHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const menuItems: MenuItem[] = [
    { href: '#about', title: 'О нас' },
    { href: '#advantages', title: 'Преимущества' },
    { href: '#reviews', title: 'Отзывы' },
    { href: '#contacts', title: 'Контакты' },
  ];

  return (
    <header
      className={`app-header ${scrolled ? 'scrolled' : ''} ${
        headerHidden ? 'header-hidden' : ''
      } ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="logo flex items-center">
          <Drum className="w-8 h-8 text-secondary" />
          <span className="ml-2 text-xl font-bold text-white">BOOM</span>
        </Link>
        <button
          className="burger md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <nav
          className={`w-full md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {menuItems.map((item: MenuItem) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-item block py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
