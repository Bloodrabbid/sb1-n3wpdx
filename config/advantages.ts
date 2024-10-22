import { Calendar, User, Music, Users } from 'lucide-react';

export interface AdvantageSlide {
  type: 'description' | 'image' | 'video';
  content: string;
}

export interface Advantage {
  icon: typeof Calendar | typeof User | typeof Music | typeof Users;
  title: string;
  shortDescription: string;
  slides: AdvantageSlide[];
}

export const advantages: Advantage[] = [
  {
    icon: Calendar,
    title: 'ГИБКОЕ РАСПИСАНИЕ',
    shortDescription: 'Вы сами решаете, когда прийти на урок или репетицию.',
    slides: [
      {
        type: 'description',
        content: 'Наше гибкое расписание позволяет вам выбирать удобное время для занятий. Вы можете легко записаться на уроки через наше мобильное приложение или веб-сайт. Мы понимаем, что у каждого свой ритм жизни, поэтому стараемся подстроиться под ваши потребности.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    icon: User,
    title: 'ИНДИВИДУАЛЬНЫЙ ПОДХОД',
    shortDescription: 'Уроки проводятся индивидуально - особый подход к каждому.',
    slides: [
      {
        type: 'description',
        content: 'Мы верим, что каждый ученик уникален. Поэтому наши преподаватели разрабатывают индивидуальную программу обучения, учитывая ваши цели, уровень подготовки и темп обучения. Это позволяет достигать максимальных результатов в кратчайшие сроки.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    icon: Music,
    title: 'ЗАНЯТИЯ ЗА ИНСТРУМЕНТОМ',
    shortDescription: 'Профессиональное оборудование всегда доступно для занятий и репетиций.',
    slides: [
      {
        type: 'description',
        content: 'В нашей студии вы найдете широкий выбор профессиональных инструментов и оборудования. Мы регулярно обновляем наш парк инструментов, чтобы вы могли практиковаться на лучшем оборудовании. Это позволяет вам сосредоточиться на обучении, не беспокоясь о покупке дорогостоящих инструментов.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    icon: Users,
    title: 'КРУТЫЕ МЕРОПРИЯТИЯ И КОНЦЕРТЫ',
    shortDescription: 'Приходи на квартирники, мастер классы от известных барабанщиков, а в конце обучения - сыграй любимую песню на настоящей сцене',
    slides: [
      {
        type: 'description',
        content: 'Мы не просто учим музыке, мы создаем музыкальное сообщество. Регулярно проводим концерты, где вы можете показать свои навыки на настоящей сцене. Организуем мастер-классы с известными музыкантами, чтобы вы могли учиться у лучших. Наши квартирники - это отличная возможность познакомиться с единомышленниками и обменяться опытом.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  }
];