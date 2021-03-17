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

export { data1, data2 }