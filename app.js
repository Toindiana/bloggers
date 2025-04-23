let arr = [
  {
    name: '[НауЧпок]',
    link: 'https://vk.com/nowchpok',
    qr: 'nauchpok.png',
    desc: 'Распрекрасный канал о всяких научных штуках',
  },
  {
    name: 'VERT DIDER',
    link: 'https://vk.com/studio_vds',
    qr: 'VERtDIDER.png',
    desc: 'Перевод и озвучка научно-популярных видео, лекций, дебатов и документальных фильмы. Популяризация науки, борьба с различными заблуждениями и ликвидация невежества.',
  },
  {
    name: 'ТОПЛЕС',
    link: 'https://vk.com/toples_show',
    qr: 'toples.png',
    desc: 'Сложные вещи простым языком. Глубокий анализ, непривычный ход мысли и противоинтуитивные факты!',
  },
  {
    name: 'ПостНаука',
    link: 'postNauka.png',
    qr: 'toples.png',
    desc: 'Один из лучших медиапроектов научной и образовательной направленности. Всевозможные курсы, лекции, интервью существенно расширят ваш кругозор и кругозор ваших подростков.',
  },
  {
    name: 'Химия – Просто',
    link: 'https://vk.com/chemistryeasyru',
    qr: 'himiya.png',
    desc: 'Научно-популярный проект по химии в РФ.',
  },
  {
    name: 'Космос просто',
    link: 'https://vk.com/cosmosprosto',
    qr: 'kosmos.png',
    desc: 'Видео о космосе простым языком.',
  },
  {
    name: 'Дети и наука',
    link: 'https://rutube.ru/u/childrenscience',
    qr: 'detyAndNauka.png',
    desc: '«Дети и наука» — системное образование для детей и родителей, нацеленных на высокий результат обучения.',
  },
  {
    name: 'Физика от Побединского',
    link: 'https://vk.com/physfrompobed',
    qr: 'pobedinskiy.png',
    desc: 'Все самое интересное из мира физики!',
  },
  {
    name: 'Пиксель',
    link: 'https://vk.com/clubpixel_ru',
    qr: 'piksel.png',
    desc: 'Программирование для детей',
  },
  {
    name: 'Маткульт-привет! :: Алексей Савватеев и Ко',
    link: 'https://dzen.ru/matkult_privet',
    qr: 'savataev.png',
    desc: 'Лекции по математике разных уровней сложности, а также разборы известных теорем и рассуждения о науке и образовании.',
  },
  {
    name: 'Культура для школьников',
    link: 't.me/cultureforschoolkids',
    qr: 'kultura.png',
    desc: 'Канал культурно-просветительского проекта «Культура для школьников». Новости, культурная афиша и статьи для тебя! ',
  },
  {
    name: 'Третьяковка официально',
    link: 't.me/GT_Gallery',
    qr: 'tretyakovka.png',
    desc: 'Новости, анонсы событий, истории и другая информация о жизни музея.',
  },
  {
    name: 'Спортания',
    link: 'https://vk.com/sportaniya',
    qr: 'sportaniya.png',
    desc: 'Познавательный мультсериал познакомит детей с основами ЗОЖ и разными видами спорта.',
  },
  {
    name: 'Капитан Краб',
    link: 'https://rutube.ru/channel/31182221',
    qr: 'krab.png',
    desc: 'Развивающий мультсериал для самых маленьких.',
  },
  {
    name: 'Единый волонтерский центр Мурманской области',
    link: 'https://vk.com/evcmurmansk',
    qr: 'murmansk.png',
    desc: 'Объединение волонтеров Мурманской области',
  },
];

const cardContainer = document.querySelector('.card-container');

arr.forEach((card) => {
  let div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `<h2>${card.name}</h2>
        <p>${card.desc}</p>
        <img src="img/${card.qr}" alt="QR-код ${card.name}" />
        <a href="${card.link}" target="_blank">Перейти к блогеру</a>`;

  cardContainer.append(div);
});
