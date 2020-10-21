$(document).ready(function () {
    $("#section-contacts_content_form").on('submit', function (event) {
        event.preventDefault();
    
        let string = $("#section-contacts_content_form").serialize(); // Соханяем данные введенные в форму в строку.
    
        // Формируем ajax запрос
        $.ajax({
            type: "POST", // Тип запроса - POST
            url: "php/send.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string
    
            // Функция если все прошло успешно
            success: function (html) {
                $("#section-contacts_content_form").slideUp(800);
                $('#answer').html(html);
            }
        });
    
        // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
        return false;
    
    });
    })
