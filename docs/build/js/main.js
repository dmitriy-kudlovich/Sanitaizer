//-validate form
$("#section-contacts_content_form").validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        subject: {
            required: true,
        },
        message: {
            required: true,
        },
    },
    messages: {
        email: {
            required: "Введите Ваш Email",
            email: "Отсутствует символ @",
        },
        subject: {
            required: "Введите тему сообщения",
        },
        message: {
            required: "Введите текст сообщения",
        },
    },

    submitHandler: function (form) {
        ajaxFormSubmit();
    },
});

// Функция AJAX запрса на сервер
function ajaxFormSubmit() {
    var string = $("#section-contacts_content_form").serialize(); // Соханяем данные введенные в форму в строку.

    // Формируем ajax запрос
    $.ajax({
        type: "POST", // Тип запроса - POST
        url: "php/mail.php", // Куда отправляем запрос
        data: string, // Какие даные отправляем, в данном случае отправляем переменную string

        // Функция если все прошло успешно
        success: function (html) {
            $("#section-contacts_content_form").slideUp(800);
            $("#answer").html(html);
        },
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
}
