const quiz = [
    {
        question: 'Какого оператора в PHP не существует?',
        rightAnswerId: 1,
        id: 1,
        answers: [
            {text: '!===', id: 1},
            {text: '>=', id: 2},
            {text: '+=', id: 3},
            {text: '!==', id: 4}
        ]
    },
    {
        question: 'Есть массив $arr. Как вывести все элементы массива $arr?',
        rightAnswerId: 4,
        id: 4,
        answers: [
            {text: 'print $arr;', id: 1},
            {text: 'Это возможно сделать только через цикл.', id: 2},
            {text: 'echo $arr;', id: 3},
            {text: 'print_r($arr);', id: 4}
        ]
    },
    {
        question: 'Если установить пакет Denwer и написать скрипт, который должен отправлять письма на электронный ящик mail.ru. Но письма доходить не будут. Почему?',
        rightAnswerId: 2,
        id: 4,
        answers: [
            {text: 'Mail.ru и другие серьёзные почтовые серверы не принимают письма, отправленные с локального сервера.', id: 1},
            {text: 'Denwer по умолчанию использует свой sendmail, который лишь эмулирует отправку, но в реальности ничего не отправляет.', id: 2},
            {text: 'Всё должно доходить, а ошибка в коде.', id: 3},
            {text: 'Что-то сломали в настройках sendmail.', id: 4}
        ]
    },
    {
        question: 'В чём заключается ошибка в коде? if (strpos("mystring", "m") == false) echo "Символа m в строке mystring нет";',
        rightAnswerId: 4,
        id: 4,
        answers: [
            {text: 'Нет фигурных скобок у блока операторов при срабатывании условия.', id: 1},
            {text: 'Здесь нет ошибок, так как strpos("mystring", "m") не равен false, и строки "Символа m в строке mystring нет" не появляется.', id: 2},
            {text: 'Функция strpos() неправильно использована. Сначала должна идти искомая строка, а уже потом та строка, в которой происходит поиск.', id: 3},
            {text: 'Функция strpos() вернула 0, который в PHP равен false. Чтобы не было ошибки надо вместо знака равенстка (==) использовать знак эквивалентности (===).', id: 4}
        ]
    },
    {
        question: 'Какая функция в PHP позволяет найти вхождение подстроки?',
        rightAnswerId: 3,
        id: 5,
        answers: [
            {text: 'str_repeat()', id: 1},
            {text: 'strtok()', id: 2},
            {text: 'strpos()', id: 3},
            {text: 'substr()', id: 4}
        ]
    },
    {
        question: 'Что выведет данный код: echo "1" + "2";',
        rightAnswerId: 4,
        id: 6,
        answers: [
            {text: 'Ошибку синтаксиса.', id: 1},
            {text: '12', id: 2},
            {text: '32', id: 3},
            {text: '3', id: 4}
        ]
    },
    {
        question: 'Как пишется оператор безусловного перехода в PHP (версия PHP 5.2)?',
        rightAnswerId: 4,
        id: 7,
        answers: [
            {text: 'header()', id: 1},
            {text: 'goto', id: 2},
            {text: 'rjmp', id: 3},
            {text: 'Такого оператора в PHP версии ниже 5.3 не существует.', id: 4}
        ]
    },
    {
        question: 'Какая разница между равенством и эквивалентностью?',
        rightAnswerId: 4,
        id: 8,
        answers: [
            {text: 'Знак эквивалентности работает лишь для строк, а знак равенства применим к любым типам.', id: 1},
            {text: 'Никакой разницы нет.', id: 2},
            {text: 'Знак эквивалентности проверяет лишь значения операндов, а знак равенства значения и их типы.', id: 3},
            {text: 'Знак равенства проверяет лишь значения операндов, а знак эквивалентности значения и их типы.', id: 4}
        ]
    },
    {
        question: 'Как сделать редирект (например, на google.ru) на PHP?',
        rightAnswerId: 1,
        id: 9,
        answers: [
            {text: 'header("Location: http://google.ru");', id: 1},
            {text: 'location.href = "http://google.ru";', id: 2},
            {text: 'header("Redirect: http://google.ru");', id: 3},
            {text: 'document.location = "http://google.ru";', id: 4}
        ]
    },
    {
        question: 'Есть строка: $str = "123456". Как из этой строки получить подстроку "5"?',
        rightAnswerId: 1,
        id: 10,
        answers: [
            {text: '$str[4];', id: 1},
            {text: '$str[6];', id: 2},
            {text: '$str[];', id: 3},
            {text: '$str[5];', id: 4}
        ]
    }
]
export default quiz;