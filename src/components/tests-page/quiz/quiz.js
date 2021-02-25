const quiz = [
    {
        question: 'Какой из представленных вариантов является валидным по XHTML 1.1:',
        rightAnswerId: 2,
        id: 1,
        answers: [
            {text: '<img src="foto.jpg" alt="Изображение">', id: 1},
            {text: '<img src="foto.jpg" alt="Изображение" />', id: 2},
            {text: '<img src="foto.jpg" title="Изображение">', id: 3},
            {text: '<img src="foto.jpg" title="Изображение" />', id: 4}
        ]
    },
    {
        question: 'Что необходимо прописать, чтобы при наведении мыши на изображение, появлялась всплывающая подсказка с текстом “Подсказка". Какой валидный код XHTML 1.1 для этого используется?',
        rightAnswerId: 3,
        id: 2,
        answers: [
            {text: '<img src="foto.jpg" title="Подсказка" />', id: 1},
            {text: '<img src="foto.jpg" alt="Подсказка" />', id: 2},
            {text: '<img src="foto.jpg" alt="Изображение" title="Подсказка" />', id: 3},
            {text: '<img src="foto.jpg" alt="Подсказка" title="Изображение" />', id: 4}
        ]
    },
    {
        question: 'Какой из представленных ниже HTML-кодов НЕ является валидным XHTML 1.1:',
        rightAnswerId: 3,
        id: 3,
        answers: [
            {text: '<p>Текст</p>', id: 1},
            {text: '<p style="font-size: 1000%;">Текст</p>', id: 2},
            {text: '<u>Подчёркнутый текст</u>', id: 3},
            {text: '<i>Курсив</i>', id: 4}
        ]
    },
    {
        question: 'Какого тега НЕ существует:',
        rightAnswerId: 4,
        id: 4,
        answers: [
            {text: '<pre>', id: 1},
            {text: '<ol>', id: 2},
            {text: '<em>', id: 3},
            {text: '<adress>', id: 4}
        ]
    },
    {
        question: 'Если необходимо добавить несколько подряд идущих пробелов в тексте, какой тег надо использовать, чтобы пробелы не вырезались?',
        rightAnswerId: 4,
        id: 5,
        answers: [
            {text: '<address>', id: 1},
            {text: '<span>', id: 2},
            {text: '<code>', id: 3},
            {text: '<pre>', id: 4}
        ]
    },
    {
        question: 'Какой тег нужно добавить для переноса строки, сохранив при этом валидность XHTML 1.1?',
        rightAnswerId: 3,
        id: 6,
        answers: [
            {text: '<hr>', id: 1},
            {text: '<hr />', id: 2},
            {text: '<br />', id: 3},
            {text: '<br>', id: 4}
        ]
    },
    {
        question: 'Какой из представленных ниже HTML-кодов НЕ является валидным XHTML 1.1:',
        rightAnswerId: 2,
        id: 7,
        answers: [
            {text: '<i>Курсив</i>', id: 1},
            {text: '<u>Подчёркнутый текст</u>', id: 2},
            {text: '<p style="font-size: 1000%;">Текст</p>', id: 3},
            {text: '<p>Текст</p>', id: 4}
        ]
    },
    {
        question: 'На сайте внутри папки pages находится файл page.html. А внутри папки images находится файл foto.jpg. Причём папки images и pages лежат в корне сайта. Как правильно написать путь к foto.jpg из файла page.html:',
        rightAnswerId: 3,
        id: 8,
        answers: [
            {text: 'pages/images/foto.jpg', id: 1},
            {text: 'images/foto.jpg', id: 2},
            {text: '../images/foto.jpg', id: 3},
            {text: '../images/pages/foto.jpg', id: 4}
        ]
    },
    {
        question: 'Если попытатся вставить изображение на сайт следующим образом: <img src=’my_foto.jpg’ title=’Моя картинка’ /> оно отобразится, но при попытке проверить валидность на стандарт XHTML 1.1 появится ошибка. В чём она заключается?',
        rightAnswerId: 1,
        id: 9,
        answers: [
            {text: 'Не хватает атрибута alt у тега <img>.', id: 1},
            {text: 'Атрибуты нужно заключать в двойные кавычки, а не в одинарные.', id: 2},
            {text: 'Атрибута title у тега <img> не существует.', id: 3},
            {text: 'Неправильно закрыт тег <img>. Вместо /> надо писать >.', id: 4}
        ]
    },
    {
        question: 'Какая ошибка в следующем коде: <a href="page.html"><b><i>Страница 1</i></a>',
        rightAnswerId: 3,
        id: 10,
        answers: [
            {text: 'Не указан обязательный атрибут title у тега <a>.', id: 1},
            {text: 'Не указан обязательный атрибут alt у тега <a>.', id: 2},
            {text: 'Не закрыт тег <b>.', id: 3},
            {text: 'Внутри тега <a> не может быть тег <b> и/или тег <i>.', id: 4}
        ]
    }
]
export default quiz;