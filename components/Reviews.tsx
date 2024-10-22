'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Review {
  id: number;
  author: string;
  content: string;
  rating: number;
  date: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Simulating an API call to fetch reviews
    const fetchedReviews: Review[] = [
      {
        id: 1,
        author: 'Екатерина Солодова',
        content: 'Отличное место! Мне все нравится! Преподаватели супер, занятия интересные. Приходите, рекомендую!',
        rating: 5,
        date: '13 июня 2024'
      },
      {
        id: 2,
        author: 'Олеся Федорова',
        content: 'Благодарю за отличную атмосферу и классное обучение. Ребёнок пришёл абсолютно без знаний, никогда за барабанами не сидела. Очень понравилось!',
        rating: 5,
        date: '7 июля 2024'
      },
      {
        id: 3,
        author: 'Вячеслав Шадрин',
        content: 'Спасибо преподавателю Владимиру. Было круто. Как доходчиво и просто было моему сыну "вложена" инфо, что через несколько минут он смог "сбарабанить" классный ритм. Атмосфера очень добрая и располагающая к обучению и развитию. Всех вам благ',
        rating: 5,
        date: '13 июля 2024'
      },
      {
        id: 4,
        author: 'Иван Проц',
        content: 'Хорошее место где можно отвлечься от повседневной рутины, развить свои навыки, познакомиться с интересными людьми. Объясняют и рассказывают очень хорошо, научиться играть и чувствовать ритм получиться быстро, рекомендую!',
        rating: 5,
        date: '12 июня 2024'
      }
    ];
    setReviews(fetchedReviews);
  }, []);

  return (
    <section id="reviews" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">ОТЗЫВЫ О НАС</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="review-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
                <p className="text-lg mb-4 text-white">{review.content}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white">{review.author}</span>
                  <span className="text-sm text-gray-300">{review.date}</span>
                </div>
                <div className="mt-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;