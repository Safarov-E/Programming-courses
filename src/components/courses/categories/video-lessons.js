const data1 = [
    {
        "id": '10',
        "src": 'https://www.youtube.com/embed/aQkgUUmUJy4',
        "title": 'Урок 1. JavaScript. Что такое prototype. JavaScript Prototype (English Subs)',
        "time": '14:59'
    },
    {
        "id": '11',
        "src": 'https://www.youtube.com/embed/UGapN-hrekw',
        "title": 'Урок 2. JavaScript. Что такое контекст this. Как работает call, bind, apply',
        "time": '20:59'
    },
    {
        "id": '12',
        "src": 'https://www.youtube.com/embed/pahO5XjnfLA',
        "title": 'Урок 3. JavaScript. Что такое замыкания. Как они работают (+ примеры)',
        "time": '11:44'
    },
    {
        "id": '13',
        "src": 'https://www.youtube.com/embed/vIZs5tH-HGQ',
        "title": 'Урок 4. JavaScript. Асинхронность.Что такое Event Loop. JS SetTimeout 0',
        "time": '17:58'
    },
    {
        "id": '14',
        "src": 'https://www.youtube.com/embed/1idOY3C1gYU',
        "title": 'Урок 5. JavaScript. Promise. Что это, как работает (+ пример)',
        "time": '23:18'
    },
    {
        "id": '15',
        "src": 'https://www.youtube.com/embed/cS6nTVNzOPw',
        "title": 'Урок 6. JavaScript. Объекты с Object.create. Что такое getters, setters',
        "time": '14:34'
    },
    {
        "id": '16',
        "src": 'https://www.youtube.com/embed/uLY9GXGMXaA',
        "title": 'Урок 7. JavaScript. Все о ES6 Классах (+ Практическое Применение)',
        "time": '20:14'
    },
    {
        "id": '17',
        "src": 'https://www.youtube.com/embed/SHiUyM_fFME',
        "title": 'Урок 8. JavaScript. Как работает Async, Await. Работа с сервером c fetch',
        "time": '14:13'
    },
    {
        "id": '18',
        "src": 'https://www.youtube.com/embed/np08WdS9OXg',
        "title": 'Урок 9. JavaScript. Proxy. Объекты, функции, классы. Часть 1',
        "time": '24:42'
    },
    {
        "id": '19',
        "src": 'https://www.youtube.com/embed/mSbyhHfxs04',
        "title": 'Урок 10. JavaScript. Proxy. Примеры. Часть 2',
        "time": '25:27'
    },
    {
        "id": '20',
        "src": 'https://www.youtube.com/embed/7wtbNNiOh30',
        "title": 'Урок 11. JavaScript. Генераторы. Symbol iterator, for of',
        "time": '17:26'
    },
    {
        "id": '21',
        "src": 'https://www.youtube.com/embed/nEabP9CYCAQ',
        "title": 'Урок 12. JavaScript. Методы массивов (forEach, map, filter, reduce, find, findIndex). Js Массивы.',
        "time": '24:05'
    },
    {
        "id": '22',
        "src": 'https://www.youtube.com/embed/mbcP3Oc0PjU',
        "title": 'Урок 13. JavaScript. Все о Map, Set, WeakMap, WeakSet с примерами',
        "time": '40:03'
    },
    {
        "id": '23',
        "src": 'https://www.youtube.com/embed/eKCD9djJQKc',
        "title": 'Урок 14. JavaScript. Запросы на сервер. Fetch, XMLHttpRequest (XHR), Ajax',
        "time": '29:18'
    },
    {
        "id": '24',
        "src": 'https://www.youtube.com/embed/SGeQ-U0G7dE',
        "title": 'Урок 15. JavaScript. Все о Spread и Rest',
        "time": '24:08'
    },
    {
        "id": '25',
        "src": 'https://www.youtube.com/embed/wWYokY0Pt2M',
        "title": 'Урок 16. JavaScript. Все о Деструктуризации в JS',
        "time": '15:30'
    },
    {
        "id": '26',
        "src": 'https://www.youtube.com/embed/3-bZ7gLVSzo',
        "title": 'Урок 17. JavaScript. Все о LocalStorage',
        "time": '16:39'
    }
]

const data2 = [
    {
        "id": '27',
        "src": 'https://www.youtube.com/embed/Gftb3BcQKcA',
        "title": 'Xampp. Установка локального web-сервера. Создание первого php-скрипта.',
        "time": '10:18'
    },
    {
        "id": '28',
        "src": 'https://www.youtube.com/embed/f7J5kYuS1XU',
        "title": 'Битва за 80 порт: веб-сервер, skype и windows 10',
        "time": '04:59'
    },
    {
        "id": '29',
        "src": 'https://www.youtube.com/embed/vyz9TnuqZDE',
        "title": 'Xampp - перенастраиваем 80-ый порт на любой другой',
        "time": '04:04'
    },
    {
        "id": '30',
        "src": 'https://www.youtube.com/embed/Z0TYy6L0dr8',
        "title": 'Основы PHP - урок 1. Локальный веб-сервер, синтаксис программ, переменные.',
        "time": '1:56:36'
    },
    {
        "id": '31',
        "src": 'https://www.youtube.com/embed/kYlmY07CupI',
        "title": 'Основы PHP - урок 2. Операции сравнения, логические операции, ветвления.',
        "time": '1:45:42'
    },
    {
        "id": '32',
        "src": 'https://www.youtube.com/embed/1L2u9RkxJtc',
        "title": 'Основы PHP - урок 3. Функции и циклы.',
        "time": '1:39:36'
    },
    {
        "id": '33',
        "src": 'https://www.youtube.com/embed/9h0htMmsRvk',
        "title": 'Основы PHP - урок 4. Циклы и массивы. GET и POST.',
        "time": '1:55:43'
    },
    {
        "id": '34',
        "src": 'https://www.youtube.com/embed/UvzP7MWIsxs',
        "title": 'Основы PHP - урок 5. Валидация формы, хранение информации.',
        "time": '1:54:11'
    },
    {
        "id": '35',
        "src": 'https://www.youtube.com/embed/M08umlZZXY8',
        "title": 'PHP: основы безопасности сайта. SQL-инъекции, XSS-атаки и защита от них.',
        "time": '1:29:44'
    },
    {
        "id": '36',
        "src": 'https://www.youtube.com/embed/Lm_WmdLFceM',
        "title": 'PHP - работа с файлами [пробный урок курса, часть 1]',
        "time": '1:02:00'
    },
    {
        "id": '37',
        "src": 'https://www.youtube.com/embed/p8lMLn9b5sU',
        "title": 'PHP - работа с файлами [пробный урок курса, часть 2]',
        "time": '1:15:17'
    }
]

const data3 = [
    {
        "id": '38',
        "src": 'https://www.youtube.com/embed/7NNtOXgNPBM',
        "title": 'Курс по WordPress | Урок 1. Установка Wordpress | Академия вёрстки',
        "time": '20:02'
    },
    {
        "id": '39',
        "src": 'https://www.youtube.com/embed/URFhyvZTENc',
        "title": 'Курс по WordPress | Урок 2. Создание темы | Академия вёрстки',
        "time": '49:40'
    },
    {
        "id": '40',
        "src": 'https://www.youtube.com/embed/JQcxO81ojBM',
        "title": 'Урок 3. Регистрация меню в Wordpress | Курс по WordPress | Академия вёрстки',
        "time": '24:24'
    },
    {
        "id": '41',
        "src": 'https://www.youtube.com/embed/_m1Fs7_va8E',
        "title": 'Урок 4. Сайдбары Wordpress | Курс по WordPress | Академия вёрстки',
        "time": '28:56'
    },
    {
        "id": '42',
        "src": 'https://www.youtube.com/embed/gIDId7lej80',
        "title": 'Урок 5. Вывод постов | Курс по WordPress | Академия вёрстки',
        "time": '27:31'
    },
    {
        "id": '43',
        "src": 'https://www.youtube.com/embed/L20CavV0Gqo',
        "title": 'Урок 6. Еще раз про хуки. Шорткоды | Курс по WordPress | Академия вёрстки',
        "time": '29:27'
    },
    {
        "id": '44',
        "src": 'https://www.youtube.com/embed/qt4d_5CFkGc',
        "title": 'Курс по WordPress | Урок 7 Шаблоны постов, страниц | Академия вёрстки',
        "time": '18:42'
    },
    {
        "id": '45',
        "src": 'https://www.youtube.com/embed/02qdcuttj3c',
        "title": 'Курс по WordPress | Урок 8. Свои типы записей | Академия вёрстки',
        "time": '22:14'
    },
    {
        "id": '46',
        "src": 'https://www.youtube.com/embed/U7Q6aB5u5b0',
        "title": 'Курс по WordPress | Урок 9 Произвольные поля | Академия вёрстки',
        "time": '14:13'
    },
    {
        "id": '47',
        "src": 'https://www.youtube.com/embed/7GNaMaRQkT0',
        "title": 'Курс по WordPress | Урок 10 Таксономии | Академия вёрстки',
        "time": '21:11'
    },
    {
        "id": '48',
        "src": 'https://www.youtube.com/embed/07pk1wHAxfY',
        "title": 'Урок 11 Формы Wordpress | Курс по WordPress | Академия вёрстки',
        "time": '44:43'
    },
    {
        "id": '49',
        "src": 'https://www.youtube.com/embed/Uzqz7ETy9L8',
        "title": 'Курс по WordPress | Урок 12 Дочерние темы Wordpress | Академия вёрстки',
        "time": '12:18'
    },
    {
        "id": '50',
        "src": 'https://www.youtube.com/embed/V3B43Lqufw0',
        "title": 'Курс по WordPress | Урок 13 SEO для WordPress | Академия вёрстки',
        "time": '17:52'
    },
    {
        "id": '51',
        "src": 'https://www.youtube.com/embed/fbQC7-EtH1M',
        "title": 'Курс по WordPress | Урок 14 Оптимизация скорости загрузки сайта | Академия вёрстки',
        "time": '29:45'
    },
    {
        "id": '52',
        "src": 'https://www.youtube.com/embed/5a4MCZwAgO8',
        "title": 'Курс по WordPress | Урок 15 Создание темы на Unyson | Академия вёрстки',
        "time": '45:43'
    }
]

const data4 = [
    {
        "id": '53',
        "src": 'https://www.youtube.com/embed/OMsP7_bCAxY',
        "title": 'TypeScript #1 Введение и настройка окружения',
        "time": '10:58'
    },
    {
        "id": '54',
        "src": 'https://www.youtube.com/embed/DFMcFSLcAtw',
        "title": 'TypeScript #2 Основные типы данных',
        "time": '10:30'
    },
    {
        "id": '55',
        "src": 'https://www.youtube.com/embed/bi0w_aRD_1Q',
        "title": 'TypeScript #3 Сигнатура и перегрузка функций',
        "time": '10:13'
    },
    {
        "id": '56',
        "src": 'https://www.youtube.com/embed/qET8oEn_nu8',
        "title": 'TypeScript #4 Приведение, объединение и пересечение типов данных',
        "time": '13:09'
    },
    {
        "id": '57',
        "src": 'https://www.youtube.com/embed/xhncw1nRPUc',
        "title": 'TypeScript #5 Массивы, кортежи и перечисления',
        "time": '09:24'
    },
    {
        "id": '58',
        "src": 'https://www.youtube.com/embed/lVU6BY3cty4',
        "title": 'TypeScript #6 Классы',
        "time": '12:44'
    },
    {
        "id": '59',
        "src": 'https://www.youtube.com/embed/0RUAMYdz9l0',
        "title": 'TypeScript #7 Наследование классов',
        "time": '14:22'
    },
    {
        "id": '60',
        "src": 'https://www.youtube.com/embed/jLyUeK72d70',
        "title": 'TypeScript #8 Реализация интерфейсов',
        "time": '09:36'
    },
    {
        "id": '61',
        "src": 'https://www.youtube.com/embed/0zmMHXoUzRo',
        "title": 'TypeScript #9 Абстрактные классы',
        "time": '05:25'
    },
    {
        "id": '62',
        "src": 'https://www.youtube.com/embed/X492_WJgQhI',
        "title": 'TypeScript #10 Модификаторы доступа',
        "time": '05:25'
    },
    {
        "id": '63',
        "src": 'https://www.youtube.com/embed/jKN-VqWQdlY',
        "title": 'TypeScript #11 Пространства имен',
        "time": '16:01'
    },
    {
        "id": '64',
        "src": 'https://www.youtube.com/embed/Q5YPUIFqijQ',
        "title": 'TypeScript #12 Обобщенные типы (Generics)',
        "time": '29:58'
    },
    {
        "id": '65',
        "src": 'https://www.youtube.com/embed/BTB3VDkWiOQ',
        "title": 'TypeScript #13 Утилиты (часть 1)',
        "time": '21:43'
    },
    {
        "id": '66',
        "src": 'https://www.youtube.com/embed/6JIKbG58u2M',
        "title": 'TypeScript #14 Утилиты (часть 2)',
        "time": '11:24'
    },
    {
        "id": '67',
        "src": 'https://www.youtube.com/embed/1ihVXpmOC5c',
        "title": 'TypeScript #15 Утилиты (часть 3)',
        "time": '11:04'
    },
    {
        "id": '68',
        "src": 'https://www.youtube.com/embed/synKle_wvVU',
        "title": 'TypeScript #16 Тип BigInt и дополнение пройденного материала',
        "time": '12:04'
    },
    {
        "id": '69',
        "src": 'https://www.youtube.com/embed/Rty2Db4r838',
        "title": 'TypeScript #17 Операторы ?. и ??',
        "time": '10:06'
    },
    {
        "id": '70',
        "src": 'https://www.youtube.com/embed/bO1R4SnE8r8',
        "title": 'TypeScript #18 Оператор ! и пользовательские проверки типов',
        "time": '11:10'
    },
    {
        "id": '71',
        "src": 'https://www.youtube.com/embed/hbL2wsWSWd4',
        "title": 'TypeScript #19 Настройка webpack',
        "time": '26:38'
    },
    {
        "id": '72',
        "src": 'https://www.youtube.com/embed/FckYXsuMnrM',
        "title": 'TypeScript #20 Сторонние библиотеки и файлы декларации',
        "time": '10:44'
    }
]

const data5 = [
    {
        "id": '73',
        "src": 'https://www.youtube.com/embed/XZe6_tzJY6g',
        "title": 'Курс Node.js - для тех, кто хочет начать бекенд разработку',
        "time": '07:56'
    },
    {
        "id": '74',
        "src": 'https://www.youtube.com/embed/ysg9kakXL5o',
        "title": 'NodeJS. 02. Как учиться на курсе Node.js. Правила курса',
        "time": '06:25'
    },
    {
        "id": '75',
        "src": 'https://www.youtube.com/embed/hMUotiiz_iw',
        "title": 'NodeJS. 03. Установка и первая программа',
        "time": '10:33'
    },
    {
        "id": '76',
        "src": 'https://www.youtube.com/embed/5-YfjWaLj2w',
        "title": 'NodeJS. 04. Дебаг программ на Node.js',
        "time": '19:24'
    },
    {
        "id": '77',
        "src": 'https://www.youtube.com/embed/1gWQf2WLnT8',
        "title": 'NodeJS. 05. Передача параметров в Node.js',
        "time": '12:02'
    },
    {
        "id": '78',
        "src": 'https://www.youtube.com/embed/LQOQ_MGbRns',
        "title": 'NodeJS. 06. Читаем папки и файлы. Создаем файлы.',
        "time": '23:47'
    },
    {
        "id": '79',
        "src": 'https://www.youtube.com/embed/ch02G5Arkd0',
        "title": 'Читаем и пишем CSV и JSON файлы в Node.js',
        "time": '22:30'
    },
    {
        "id": '80',
        "src": 'https://www.youtube.com/embed/YMJDUHUccvA',
        "title": 'Получение GET и POST запросов на Node.js',
        "time": '23:50'
    },
    {
        "id": '81',
        "src": 'https://www.youtube.com/embed/YhuozY-qplI',
        "title": 'Подключение к базе данных MySQL в Node.js',
        "time": '23:04'
    },
    {
        "id": '82',
        "src": 'https://www.youtube.com/embed/6IMq2QqBm8Q',
        "title": 'Роутинг на Node.JS',
        "time": '13:37'
    },
    {
        "id": '83',
        "src": 'https://www.youtube.com/embed/p7k5Clof13U',
        "title": 'Последовательные запросы в базу данных на Node.js',
        "time": '14:06'
    },
    {
        "id": '84',
        "src": 'https://www.youtube.com/embed/1PkarXC-9TQ',
        "title": 'Модули Node.js, require',
        "time": '20:39'
    },
    {
        "id": '85',
        "src": 'https://www.youtube.com/embed/n9DY1U4EQq0',
        "title": 'Проект на pure Node.js - загрузка файлов на сервер # 1',
        "time": '19:20'
    },
    {
        "id": '86',
        "src": 'https://www.youtube.com/embed/Zxq0kzK1qMQ',
        "title": 'Загрузка файлов на сервер. Часть 1',
        "time": '08:46'
    },
    {
        "id": '87',
        "src": 'https://www.youtube.com/embed/OGiePuJqq2M',
        "title": 'Загрузка файла на сервер на чистой Node.js ( часть 2)',
        "time": '23:33'
    },
    {
        "id": '88',
        "src": 'https://www.youtube.com/embed/J64xx7YP8WM',
        "title": 'Загрузка файлов на Node.js ( часть 5)',
        "time": '10:53'
    },
    {
        "id": '89',
        "src": 'https://www.youtube.com/embed/dHoWlAiA8CY',
        "title": 'Сохраняем данные из формы в базу. Sequelize. Node.js',
        "time": '25:38'
    },
    {
        "id": '90',
        "src": 'https://www.youtube.com/embed/JVz6nfER5rA',
        "title": 'Установка Node приложений на сервер. Руками #1',
        "time": '27:48'
    },
    {
        "id": '92',
        "src": 'https://www.youtube.com/embed/MfR8gPtrMKo',
        "title": 'Установка Node приложений на сервер. Руками #2',
        "time": '12:06'
    }
]

const data6 = [
    {
        "id": '93',
        "src": 'https://www.youtube.com/embed/8mK5aY5YOCc',
        "title": 'HTML для начинающих - #1 - Введение',
        "time": '10:18'
    },
    {
        "id": '94',
        "src": 'https://www.youtube.com/embed/oBKaXB9CMMo',
        "title": 'HTML для начинающих - #2 - Теги и атрибуты',
        "time": '17:11'
    },
    {
        "id": '95',
        "src": 'https://www.youtube.com/embed/fgeANjiWwKg',
        "title": 'HTML для начинающих - #3 - Списки',
        "time": '09:20'
    },
    {
        "id": '96',
        "src": 'https://www.youtube.com/embed/BYnpSIdqXt8',
        "title": 'HTML для начинающих - #4 - Таблицы',
        "time": '13:47'
    },
    {
        "id": '97',
        "src": 'https://www.youtube.com/embed/ydxgOZG0BUI',
        "title": 'HTML для начинающих - #5 - Фрэймы',
        "time": '08:44'
    },
    {
        "id": '98',
        "src": 'https://www.youtube.com/embed/nF0X9PRVOsA',
        "title": 'HTML для начинающих - #6 - Ссылки',
        "time": '08:35'
    },
    {
        "id": '99',
        "src": 'https://www.youtube.com/embed/nxtV-PwYkjU',
        "title": 'HTML для начинающих - #7 - Атрибуты.Часть 1',
        "time": '09:13'
    },
    {
        "id": '100',
        "src": 'https://www.youtube.com/embed/jZR8m9djWXs',
        "title": 'HTML для начинающих - #8 - Атрибуты. Часть 2',
        "time": '12:26'
    },
    {
        "id": '101',
        "src": 'https://www.youtube.com/embed/abWbB4RYFYM',
        "title": 'HTML для начинающих - #9 - Формы. Введение',
        "time": '10:05'
    },
    {
        "id": '102',
        "src": 'https://www.youtube.com/embed/x55mwoVJ_IE',
        "title": 'HTML для начинающих - #10 - Формы. Часть 2',
        "time": '18:53'
    },
    {
        "id": '103',
        "src": 'https://www.youtube.com/embed/LOphfrzuxtc',
        "title": 'HTML для начинающих - #11 - Семантические особенности HTML5',
        "time": '11:12'
    }
]

export { data1, data2, data3, data4, data5, data6 }