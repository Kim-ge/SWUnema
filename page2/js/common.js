$(window).on('scroll', function(){
  if($(this).scrollTop() > 50){
    $('.loc').addClass('sticky');
    if($(this).scrollTop() > 200){
      $('.tab').addClass('sticky');
    } else {
      $('.tab').removeClass('sticky');
    }
  } else {
    $('.loc').removeClass('sticky');
  }
});


$(window).on('scroll', function(){
  if($(this).scrollTop() < 350){
    $('.scroll-button').addClass('none');
  } else {
    if($(this).scrollTop() < 2080){
      $('.scroll-button').addClass('sticky');
    } else {
      $('.scroll-button').removeClass('sticky');
    }
    $('.scroll-button').removeClass('none');
  }
});

$('.scroll').on('click', function(){
  $('html, body').animate(
    {scrollTop : 0 }, 400
  );
  return false;
});


$('.ui-button--sitemap').on('click', function(){
  $(this).toggleClass('on');
  $('.ui-button--search').removeClass('on');
  $('.ui-button--mymega').removeClass('on');
  $('.layer-content--sitemap').toggleClass('on');
  $('.layer-content--search').removeClass('on');
  $('.layer-content--mymega').removeClass('on');
});


$('.ui-button--search').on('click', function(){
  $(this).toggleClass('on');
  $('.ui-button--sitemap').removeClass('on');
  $('.ui-button--mymega').removeClass('on');
  $('.layer-content--search').toggleClass('on');
  $('.layer-content--sitemap').removeClass('on');
  $('.layer-content--mymega').removeClass('on');
});

$('.search-tab__link').on('click', function(e){
  e.preventDefault();
  content = $(this).data('class');
  thumb =  $('.'+ content).children().find('.search-rank__link--first').data('image');
  $('.search-tab__link').removeClass('on');
  $(this).addClass('on');
  $('.search-content').removeClass('on');
  $('.'+ content).addClass('on');
  $('.search-thumb__image').attr('src', thumb);
});

$('.search-rank__link').hover(function(){
  url = $(this).data('image');
  $('.search-thumb__image').attr('src', url);
})



$('.ui-button--mymega').on('click', function(e){
  $
  $(this).toggleClass('on');
  $('.ui-button--sitemap').removeClass('on');
  $('.ui-button--search').removeClass('on');
  $('.layer-content--mymega').toggleClass('on');
  $('.layer-content--sitemap').removeClass('on');
  $('.layer-content--search').removeClass('on');
});


$('.nav-big__item').hover(function(){
  $(this).children('.nav-over').toggleClass('on');
});


$('.card-over').hover(function(){
  $(this).toggleClass('on');
});




