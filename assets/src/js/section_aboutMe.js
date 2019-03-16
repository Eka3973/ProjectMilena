var elements = jQ('.modal-overlay, .modal');

jQ('#learnMore').click(function(e){
    elements.addClass('active');
    e.preventDefault();
});

jQ('.close-modal').click(function(){
    elements.removeClass('active');
});