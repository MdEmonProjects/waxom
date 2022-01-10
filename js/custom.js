$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $(".navbar").addClass("menu_bg");
        }
        else{
            $(".navbar").removeClass("menu_bg");
        }
    });
    // banner-slikslider start
    $('.slick_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        

      });

    // banner-slikslider End


    // services-slider start
    $('.slick_items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
      });
    // services-slider End



      // post slider part start
    $('.slider_post').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
      });
      // post slider part End


    // cliant slider part start
    $('.slider_logo').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
      });
    // cliant slider part End



      $('.count_num').counterUp({
        delay: 100,
        time: 1500
    });

    $(document).ready(function(){
        $('.venobox').venobox(); 
    });


    // mixit-up
    var containerEl = document.querySelector('.for_mix');

            var mixer = mixitup(containerEl);
});