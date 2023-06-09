    let sectArray = []
    function sectDist() {
        for (let i=0; i<$('.section').length; i++) {
            sectArray[i] = $('.section').eq(i).offset().top
        }
    }
    sectDist()

    $(window).on('resize', function(){
        sectDist()
    })

    $('#nav .depth1 li a').on('click', function(){
        let num = $(this).parent().index()
        $(this).parent().addClass('on')
        $(this).parent().siblings().removeClass('on')
        $('html, body').animate({
            scrollTop:sectArray[num]
        }, 500)
        return false
    })


    $(window).on('scroll', function(){
        let sct = $(this).scrollTop()
        for (let i=0; i<$('.section').length; i++) {
            let sectionTop = sectArray[i]
            let sectionBottom = sectionTop + $('.section').eq(i).outerHeight()
            if (sct>=sectionTop && sct<sectionBottom) {
                $('.depth1 li').eq(i).addClass('on')
                .siblings().removeClass('on')
            }

            let winHeight = $(window).height();
            let scrollBottom = $("#wrap").height() - winHeight - 50;
            if(sct >= scrollBottom) {
                $(".depth1 li").eq(2).removeClass("on");
                $(".depth1 li").eq(3).addClass("on");
            }


        }

    })


    $('.section').on('wheel DOMMouseScroll', function(event){
        let delta = event.originalEvent.wheelDelta
        if (delta>0) {
            $('html, body').stop().animate({
                scrollTop:$(this).prev().offset().top
            }, 500)
        } else {
            $('html, body').stop().animate({
                scrollTop:$(this).next().offset().top
            }, 500)
        }

    })



