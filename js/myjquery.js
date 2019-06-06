$('p').click(function(){
    $(this).slideToggle('slow'); // if will only make dissapear the paragraph clicked on
});


$('button').mouseenter(function(){
    $(this).addClass('makeRed').removeClass('makeBlue');
});



$('button').mouseleave(function(){
    $(this).addClass('makeBlue').removeClass('makeRed');
});
