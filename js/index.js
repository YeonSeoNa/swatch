(function($){

    let sectArray = []
    function sectDist(){
        for(let i=0; i<$('.section').length; i++) {
            sectArray[i] = $('section').eq(i).offset().left
    }
 }
 sectDist()

 $(window).on('resize',function(){
    sectDist()
 })


})(jQuery)