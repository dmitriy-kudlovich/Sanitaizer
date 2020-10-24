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
    });

    // Для мобильной панели навигации .mobile-nav

let hamburger = document.getElementById("hamburger");
let mobilePanel = document.querySelector(".mobile-nav");
let body = document.querySelector("body");


hamburger.onclick = function () {
    mobilePanel.classList.add("mobile-nav--active");
    body.classList.add("overflow-hidden");
}

mobilePanel.onclick = function () {
    mobilePanel.classList.remove("mobile-nav--active");
    body.classList.remove("overflow-hidden");
  };