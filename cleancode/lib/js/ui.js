$(document).ready(function(){
  // 2depth sub-menu open
    //   $('.sub-menu').click(function(){
    //   $(this).children('ul').toggle('active');
    // });
    
    // gnb 메뉴 아이콘 클릭시, menu active & dim 처리
    $('.menu-btn').on('click', function(){
      $('.nav').addClass('show');
      $('.gnb-overlay').addClass('active');
    });
    $('.close-btn').on('click', function(){
      $('.nav').removeClass('show');
      $('.gnb-overlay').removeClass('active');
    })
    $('.gnb-overlay').on('click', function(){
        $('.nav').removeClass('show');
        $('.gnb-overlay').removeClass('active');
    })

    // console.log($('.nav ul > li > ul ').length);
    $('.nav ul > li > a').click(function(){
      $target = $(this).next('ul');
      var allPanels = $('.nav ul > li > ul');

      if($(this).siblings('ul').length > 0){

        if( !$target.hasClass('down')) {
          allPanels.slideUp().removeClass('down')
          $target.slideDown().addClass('down')
          $target.parents('li').addClass('minus');
        } else {
          $target.parents('li').removeClass('minus');
          $target.slideUp().removeClass('down')
          
        }
      }
      
    });

  
})





