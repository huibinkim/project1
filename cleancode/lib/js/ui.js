$(document).ready(function(){
  // 2depth sub-menu open
    $('.sub-menu').click(function(){
    $(this).children('ul').toggle('active');
  });
  
  // gnb 메뉴 아이콘 클릭시, menu active & dim 처리
  $('.menu-btn').on('click', function(){
    $('.nav').addClass('active');
    $('.gnb-overlay').addClass('active');
  });
  $('.close-btn').on('click', function(){
    $('.nav').removeClass('active');
    $('.gnb-overlay').removeClass('active');
  })
  $('.gnb-overlay').on('click', function(){
      $('.nav').removeClass('active');
      $('.gnb-overlay').removeClass('active');
    })
})





