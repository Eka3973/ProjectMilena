var jQ=jQuery.noConflict();
jQ(document).ready(function(){
    jQ("#menu").on("click",".nav_navigating", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = jQ(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = jQ(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        jQ('body,html').animate({scrollTop: top}, 1500);
    });
});

//modal contact

var contacts = jQ('.modal-contact-overlay, .modal-contact');

jQ('#contact-author').click(function(e){
    contacts.addClass('active-contact');
    e.preventDefault();
});

jQ('.close-modal').click(function(){
    contacts.removeClass('active-contact');
});