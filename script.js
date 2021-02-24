$('.home-btn').click(function(){
  $('html, body').animate(
    {'scrollTop': 0 }, 500);
});

$('.scroll-btn').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html, body').animate(
    {'scrollTop' : position}, 500);
});

/*$(".berger").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
});

$("#iphone a").on("click", function() {
    $("#iphone").slideToggle();
    $(".berger").removeClass("active");
});*/
