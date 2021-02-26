const quiz = [
    {
        question: 'Как правильно подключать файл стилей?',
        rightAnswerId: 3,
        id: 1,
        answers: [
            {text: '<style>@"styles/main.css"</style>', id: 1},
            {text: "<styles>@'styles/main.css'</styles>", id: 2},
            {text: "<link rel='stylesheet' type='text/css' href='styles/main.css' />", id: 3},
            {text: "<style>@'styles/main.css'</style>", id: 4}
        ]
    },
    {
        question: 'Как правильно вставляются комментарии в CSS-код?',
        rightAnswerId: 2,
        id: 2,
        answers: [
            {text: '# Мой комментарий #>', id: 1},
            {text: '/* Мой комментарий */', id: 2},
            {text: '// Мой комментарий', id: 3},
            {text: '# Мой комментарий', id: 4}
        ]
    },
    {
        question: 'Какой CSS-код написан правильно?',
        rightAnswerId: 3,
        id: 3,
        answers: [
            {text: '<div> {border: 1px solid #ccc;}', id: 1},
            {text: 'div {border: 1px solid #hhh;}', id: 2},
            {text: 'div {border: 1px solid #ccc;}', id: 3},
            {text: '<div> {border: 1px solid #hhh;}', id: 4}
        ]
    },
    {
        question: 'Какое свойство используется для задания отступов у блока?',
        rightAnswerId: 4,
        id: 4,
        answers: [
            {text: 'direction', id: 1},
            {text: 'padding', id: 2},
            {text: 'position', id: 3},
            {text: 'margin', id: 4}
        ]
    },
    {
        question: 'Какое свойство используется для задания полей у блока?',
        rightAnswerId: 1,
        id: 5,
        answers: [
            {text: 'padding', id: 1},
            {text: 'margin', id: 2},
            {text: 'position', id: 3},
            {text: 'direction', id: 4}
        ]
    },
    {
        question: 'Какой вариант задания цвета НЕ сработает?',
        rightAnswerId: 1,
        id: 6,
        answers: [
            {text: 'color: #hhh;', id: 1},
            {text: 'color: #aaa;', id: 2},
            {text: 'color: #000;', id: 3},
            {text: 'color: #aaaaaa;', id: 4}
        ]
    },
    {
        question: 'Есть такой CSS-код: body {font-size: 14pt;} p {font-size: 2em;}. Какой размер текста будет в теге <p>:',
        rightAnswerId: 3,
        id: 7,
        answers: [
            {text: '7pt', id: 1},
            {text: '16pt', id: 2},
            {text: '28pt', id: 3},
            {text: '12pt', id: 4}
        ]
    },
    {
        question: 'Какой селектор написан с ошибкой?',
        rightAnswerId: 2,
        id: 8,
        answers: [
            {text: 'input[type="text"]', id: 1},
            {text: 'input["text"]', id: 2},
            {text: 'div p', id: 3},
            {text: 'input.text', id: 4}
        ]
    },
    {
        question: 'HTML-код: <div id="myid">Содержимое</div>. Как задать стиль для тега <div>?',
        rightAnswerId: 1,
        id: 9,
        answers: [
            {text: 'div#myid {margin: 1px;}', id: 1},
            {text: '.myid {margin: 1px;}', id: 2},
            {text: 'div.myid {margin: 1px;}', id: 3},
            {text: 'div[myid] {margin: 1px;}', id: 4}
        ]
    },
    {
        question: 'В каком из представленных ниже вариантов содержится явная ошибка:',
        rightAnswerId: 4,
        id: 10,
        answers: [
            {text: 'p span#text {font-size: 150%;}', id: 1},
            {text: 'p {font-size: 150%;}', id: 2},
            {text: 'p span {font-size: 150%;}', id: 3},
            {text: 'p text (font-size: 150%;}', id: 4}
        ]
    }
]
export default quiz;