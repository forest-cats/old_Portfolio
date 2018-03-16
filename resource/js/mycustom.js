
/*        中央から表示(top-custom)        */
$(function(){
  $('.top-custom-images p').addClass('move');
  $(window).scroll(function(){
    $(".top-custom-images").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("p").removeClass('move');
      } else {
        $(this).find("p").addClass('move');
      }
    });
  });
});
$(function(){
  $('.top-custom-contents p').addClass('move');
  $(window).scroll(function(){
    $(".top-custom-contents").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("p").removeClass('move');
      } else {
        $(this).find("p").addClass('move');
      }
    });
  });
});

/*        pagetop-btn        */
$(document).ready(function(){
    $('.pagetop-btn').click(function () { // #topBtnをクリックすると
        $('body,html').animate({ // いちばん上にanimateする
        scrollTop: 0 // 戻る位置
        }, 700); // 戻るスピード
        return false;
    });
});
