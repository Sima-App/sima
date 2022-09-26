
(function ($) {
    "use strict";

    jQuery(document).ready(function($){
     

        $(".menu_trigger").click(function(){
            $(".mainmenu, .overlay").addClass("active");
        });


        $(".menu_x, .overlay, .mainmenu li a").click(function(){
            $(".mainmenu, .overlay").removeClass("active");
        });
    
        var $owl = $(".analysis_wrapper");

        $owl.on('initialized.owl.carousel resized.owl.carousel', function (e) {
            $(e.target).toggleClass('hide-nav', e.item.count <= e.page.size);
        });

        // Owl-Carousel Plugin Active Start
        $owl.owlCarousel({
            items:1,
            nav:true,
            dot:false,
            loop: false,
            margin:15,
            autoplay:false,
            smartSpeed:1,
            navText: ["<img src='assets/img/next.png'>","<img src='assets/img/prev.png'>"],
            rtl: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            touchDrag  : false,
            mouseDrag  : false,
            navRewind: false,
            onTranslated: function () {
                if ($('.owl-carousel .owl-item').last().hasClass('active')) {
                    $('.owl-next').hide();
                    $('.owl-prev').show();
                    console.log('true');
                } else if ($('.owl-carousel .owl-item').first().hasClass('active')) {
                    $('.owl-prev').hide();
                    $('.owl-next').show();
                    console.log('false');
                }
            }
        });
        // Owl-Carousel Plugin Active End




         // Scroll Down 
        $(".scroll_down").click(function() {
            $('html,body').animate({
                scrollTop: $(".analysis_slider_wrapper").offset().top},
                'slow');
        });
        // Scroll Down 

  
  

        // WOW JS Animation
        new WOW().init();
        
        // smooth scrolling
        $(".mainmenu a, .next_hero, .analycis_btn").on("click", function (event) {
            var $anchor = $(this);
            $("html, body")
            .stop()
            .animate(
                {
                scrollTop: $($anchor.attr("href")).offset().top - 80,
                },
                1000
            );
            event.preventDefault();
        });


    


    });




}(jQuery));	



  // From Validation 
  function messages(){
    var name = document.getElementById('name');
    var email = document.getElementById('mail');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    const register = document.getElementById('register');

    if( name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }else{
        setTimeout(() => {
            name.value = ''; 
            mail.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = "block";
        register.classList.add("from_success");
    }
}
// From Validation 


        // GuessWork Slider
        var currentIndex = 0,
        items = $('.guesswork_slider .guesswork_wrap'),
        itemAmt = items.length;

        function cycleItems() {
            var item = $('.guesswork_slider .guesswork_wrap').eq(currentIndex);
            items.hide().removeClass('active');;
            item.css('display','inline-block').addClass('active');
        }

// var autoSlide = setInterval(function() {
//     currentIndex += 1;
//     if (currentIndex > itemAmt - 1) {
//     currentIndex = 0;
// }

// }, 2500);

$('.gusss_btn').click(function(e) {


    
    let notValidate = true
    if (e.currentTarget.value == "step_1"){
        if (document.getElementById('age').value == ""){
            document.getElementById('age').style.borderColor = "red"
            notValidate = false
        }
        if (document.getElementById('height').value == ""){
            document.getElementById('height').style.borderColor = "red"
            notValidate = false
        }
        if (document.getElementById('weight').value == ""){
            document.getElementById('weight').style.borderColor = "red"
            notValidate = false
        }        
    } else if (e.currentTarget.value == "step_2"){

        if (document.getElementById('speed').value == "") {
            document.getElementById('speed').style.borderColor = "red"
            notValidate = false
        }
        if (document.getElementById('passing').value == "") {
            document.getElementById('passing').style.borderColor = "red"
            notValidate = false
        }
        if (document.getElementById('shooting').value == "") {
            document.getElementById('shooting').style.borderColor = "red"
            notValidate = false
        }  
        if (document.getElementById('dribbling').value == "") {
            document.getElementById('dribbling').style.borderColor = "red"
            notValidate = false
        }  

        if (notValidate){
            performCalc()
        }

    }else{

    }

    if(notValidate){
        if (currentIndex != 8) {
            currentIndex += 1;
            if (currentIndex > itemAmt - 1) {
                currentIndex = 0;
            }
            cycleItems();
        }
    }
    

});



$('.prev').click(function() {
    // clearInterval(autoSlide);
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
    }
    cycleItems();
});
// GuessWork Slider




// owl

let totalAnaylysisCounter = 7
let currentAnaylysisCounter = 1

$('.owl-prev').on('click', function(){
    alert("test")
    currentAnaylysisCounter -= 1
    checkOwl(currentAnaylysisCounter)
})
$('.owl-next').on('click', function(){
    alert("test")
    currentAnaylysisCounter += 1
    checkOwl(currentAnaylysisCounter)
})
function checkOwl(indexToGo){
    if (indexToGo == 1){
        $('.owl-prev').hide()
    } else if (indexToGo == 7){
        $('.owl-next').hide()
    } else{
        alert("test")
    }
}