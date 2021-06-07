$(function(){
    $('.main_visual').slick({
        infinite: false,
        dots: true
    });
});
$(function(){
    $('.main > li').mouseover(function(){
        $(this).children('.sub').stop().slideDown();
        $(this).addClass('active');
    });
    $('.main > li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
        $(this).removeClass('active');
    });

    $('.m_main > li > a').click(function(){
        if($(this).next().css('display') == 'none') {
            $('.sub').slideUp();
            $(this).next().slideDown();
            //붙어있던 클래스명은 없애버리고 
            //클릭한 곳의 부모에게 클래스명이 붙음   
            $('.m_main > li').removeClass('on');
            $(this).parent().addClass('on'); 

        } else if($(this).next().css('display') == 'block') {
            $(this).next().slideUp();
             //클래스명 없애버리기  
             $('.m_main > li').removeClass('on');
        }
        // $('.m_main > li').removeClass('on');
        // $(this).parent().addClass('on'); 
    });

    $('.xi-bars').click(function(){
        $('.mobile').animate({'left':'0'}, 1000);
    });
    $('.xi-close').click(function(){
        $('.mobile').animate({'left':'-100%'}, 1000);
    });

    var header = $('header');
    var headerTop = header.offset().top; 
    var windowObj = $(window);

    windowObj.scroll(function(){
        if(headerTop < windowObj.scrollTop()) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });


});