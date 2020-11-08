// Sticky navbar Script

$(document).ready(function() {

    // bacground move
    $('.home').backgroundMove({
    movementStrength:'50'});

    // grab the initial top offset of the navigation 
       var stickyNavTop = $('nav').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky'); 
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".bgt");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 0) {
            header.removeClass('bgt').addClass("bgd");
        } else {
            header.removeClass("bgd").addClass('bgt');
        }
    });
});




// go to top script

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".none");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 600) {
            header.removeClass('none').addClass("go-top");
        } else {
            header.removeClass("go-top").addClass('none');
        }
    });
});




  // counterup Script 

jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 20,
            time: 2000
        });

// wow Js Script  
      
         new WOW().init();
          $(document).ready(function(){

// dropdown menu script
   $(".drop-btn").click(function(){
    $(".dropdown_menu").toggleClass("drop");
  });
});
             window.onclick = function(event) {
  if (!event.target.matches('.drop-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown_menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('drop')) {
        openDropdown.classList.remove('drop');
      }
    }
  }
};

// toggle navbar Script

        $('.togglenav').click(function () {
       
        $('.nav-ul').toggleClass('tactive')
    })
        $("#about, #modal, #contact, #case-studies, #practice-area").click(function(){
  $(".nav-ul").removeClass("tactive");
});
    


// go to top script

  $(".nav-ul, .go-top").scrollspy({ offset: -150 });

    });

// Owl Carousel script

$(document).ready(function(){

  $("#testmonial").owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    nav:true,
    dots:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
  });
    $("#case").owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    nav:true,
    dots:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
  });
      $("#banner").owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    autoplay:true,
    nav:true,
   
    autoplayTimeout:5000,
    autoplaySpeed: 1000,
    autoplayHoverPause:true,
     
        responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true,
            loop:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    },
     onTranslated: function () {
            changeNavsThump();
        }
  });
});
  


