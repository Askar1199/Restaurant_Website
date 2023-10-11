$(document).ready(()=>{

  //  responsive menu Toggle--
    $(".menuToggle .menuI").click(()=>{
        // $(".menuToggle ul").show()
        $(".menuToggle ").addClass('toggled')
        // console.log("hii")
    })
    $(".menuToggle .exitMenu").click(()=>{
        // $(".menuToggle ul").hide()
        $(".menuToggle ").removeClass('toggled')
    })
    
//   onScroll navigation color change--
    $(window).scroll(function(){
        if ($(this).scrollTop() > 80) {
           $('nav').addClass('newClass');
        } else {
           $('nav').removeClass('newClass');
        }
    });


    //  menu Filter--
    var btns = $('.filter--menu').click(function() {
        console.log('hi')
        if (this.id == 'all') {
          $('#parent > .menu__card').fadeIn(800);
        } else {
          var $el = $('.' + this.id).fadeIn(2000);
          $('#parent > .menu__card').not($el).hide();
        }
        btns.removeClass('filter__active');
        $(this).addClass('filter__active');
      })


      // booking gallery--
     
})