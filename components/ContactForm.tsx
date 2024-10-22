'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Script from 'next/script';

declare global {
  interface Window {
    ymaps: any;
  }
}

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, phone });
    setName('');
    setPhone('');
  };

  useEffect(() => {
    if (mapLoaded) {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map('map', {
          center: [48.502398, 135.071462],
          zoom: 15
        });
        const placemark = new window.ymaps.Placemark([48.502398, 135.071462], {
          hintContent: 'БУМ школа-студия музыки',
          balloonContent: 'БУМ школа-студия музыки<br>ул. Музыкальная, 123, Хабаровск'
        });
        map.geoObjects.add(placemark);
      });
    }
  }, [mapLoaded]);

  return (
    <>
      <Script 
        src="https://api-maps.yandex.ru/2.1/?apikey=27943b66-293b-4461-909b-a70386e523a8&lang=ru_RU" 
        onLoad={() => setMapLoaded(true)}
      />
      <section id="contacts" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div id="map" className="w-full md:w-1/2 mb-8 md:mb-0 h-[300px] md:h-[450px]"></div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-4xl font-bold mb-4 text-black">
                БУМ ШКОЛА-СТУДИЯ МУЗЫКИ
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  Записаться на пробный урок
                </Button>
              </form>
              <div className="mt-4">
                <p className="text-black">Адрес: ул. Музыкальная, 123, Хабаровск</p>
                <p className="text-black">Телефон: +7 (123) 456-7890</p>
                <p className="text-black">Email: info@bum-music.ru</p>
              </div>
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-black hover:text-primary transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-black hover:text-primary transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-black hover:text-primary transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;