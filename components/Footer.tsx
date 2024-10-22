import Image from 'next/image';
import Link from 'next/link';
import { Drum } from 'lucide-react';

const menuItems = [
  { href: "#about", title: "О нас" },
  { href: "#advantages", title: "Преимущества" },
  { href: "#reviews", title: "Отзывы" },
  { href: "#contacts", title: "Контакты" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-logo">
            <Drum className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold">БУМ школа-студия музыки</h2>
          </div>
          <div className="footer-links">
            <h3 className="text-xl font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <p>Адрес: ул. Музыкальная, 123, Хабаровск</p>
            <p>Телефон: +7 (123) 456-7890</p>
            <p>Email: info@bum-music.ru</p>
          </div>
        </div>
        <div className="footer-bottom mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; 2023 БУМ школа-студия музыки. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;