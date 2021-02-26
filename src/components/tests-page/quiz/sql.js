const quiz = [
    {
        question: 'Что означает [a-z] при задании шаблона для LIKE?',
        rightAnswerId: 4,
        id: 1,
        answers: [
            {text: 'Он означает любое количество символов НЕ из диапазона от a до z.', id: 1},
            {text: 'Он означет любое количество символов в диапазоне от a до z.', id: 2},
            {text: 'Он означает наличие 1-го символа НЕ из диапазона от a до z.', id: 3},
            {text: 'Он означает наличие 1-го символа в диапазоне от a до z.', id: 4}
        ]
    },
    {
        question: 'Выберите верное утверждение относительно индекса:',
        rightAnswerId: 2,
        id: 2,
        answers: [
            {text: 'Индекс ускоряет абсолютно любые запросы с таблицей.', id: 1},
            {text: 'Индекс позволяет ускорить выборку с тем полем, для которого он сделан.', id: 2},
            {text: 'Индекс позволяет сэкономить место, занимаемое таблицей.', id: 3},
            {text: 'Индекс ускоряет добавление записей в таблицу.', id: 4}
        ]
    },
    {
        question: 'Что делает конструкция: ORDER BY ASC',
        rightAnswerId: 2,
        id: 3,
        answers: [
            {text: 'Сортирует записи по убыванию.', id: 1},
            {text: 'Сортирует записи по возрастанию.', id: 2},
            {text: 'ASC - это функция, которая здесь некорректно использована.', id: 3},
            {text: 'ASC вообще не существует.', id: 4}
        ]
    },
    {
        question: 'Какое из утверждений о первичном ключе НЕ верно?',
        rightAnswerId: 2,
        id: 4,
        answers: [
            {text: 'Первичный ключ может содержать NULL значения.', id: 1},
            {text: 'Первичный ключ содержит только уникальные значения.', id: 2},
            {text: 'Первичный ключ НЕ может содержать NULL значений.', id: 3},
            {text: 'Каждая таблица имеет первичный ключ.', id: 4}
        ]
    },
    {
        question: 'Что делает команда CREATE?',
        rightAnswerId: 1,
        id: 5,
        answers: [
            {text: 'Создаёт таблицу.', id: 1},
            {text: 'Может и создавать таблицу, и добавлять запись.', id: 2},
            {text: 'Такой команды не существует.', id: 3},
            {text: 'Добавляет запись.', id: 4}
        ]
    },
    {
        question: 'Как обновить запись сразу в двух колонках:',
        rightAnswerId: 3,
        id: 6,
        answers: [
            {text: "UPDATE `my_table` SET `field_1` = 'value_1', SET `field_2` = 'value_2'", id: 1},
            {text: "UPDATE `my_table` SET `field_1` = 'value_1' AND `field_2` = 'value_2'", id: 2},
            {text: "UPDATE `my_table` SET `field_1` = 'value_1', `field_2` = 'value_2'", id: 3},
            {text: "UPDATE `my_table` SET `field_1` = 'value_1' SET `field_2` = 'value_2'", id: 4}
        ]
    },
    {
        question: 'Каким запросом можно удалить все записи из таблицы "my_table" (но не саму таблицу)?',
        rightAnswerId: 2,
        id: 7,
        answers: [
            {text: 'DROP TABLE "my_table"', id: 1},
            {text: 'DELETE FROM "my_table"', id: 2},
            {text: 'DELETE "my_table"', id: 3},
            {text: 'DELETE TABLE "my_table"', id: 4}
        ]
    },
    {
        question: 'Выберите верное утверждение относительно следующего запроса: SELECT `name` FROM `users`',
        rightAnswerId: 2,
        id: 8,
        answers: [
            {text: 'Результат будет содержать 2 столбца', id: 1},
            {text: 'Результат будет содержать 1 столбец', id: 2},
            {text: 'Результат будет содержать 3 столбца', id: 3},
            {text: 'В запросе ошибка', id: 4}
        ]
    },
    {
        question: 'В некоторой таблице есть поле "field". Как правильно вывести все записи, где значение поля "field" содержит строку (либо подстроку) "string":',
        rightAnswerId: 3,
        id: 9,
        answers: [
            {text: 'WHERE `field` = "string"', id: 1},
            {text: 'WHERE `field` LIKE "string"', id: 2},
            {text: 'WHERE `field` LIKE "%string%"', id: 3},
            {text: 'WHERE `field` == "string"', id: 4}
        ]
    },
    {
        question: 'Как удалить таблицу "my_table":',
        rightAnswerId: 3,
        id: 10,
        answers: [
            {text: 'DELETE TABLE "my_table"', id: 1},
            {text: 'DELETE FROM "my_table"', id: 2},
            {text: 'DROP TABLE "my_table"', id: 3},
            {text: 'DELETE "my_table"', id: 4}
        ]
    }
]
export default quiz;