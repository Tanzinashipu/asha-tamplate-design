$(document).ready(function(){
//   vinobox js
     $('.venobox').venobox({
         
     }); 
//    collsapn js
    $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
//    progress js
     var current_progress = 0;
  var interval = setInterval(function() {
      current_progress += 10;
      $("#dynamic")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% Complete");
      if (current_progress >= 100)
          clearInterval(interval);
  }, 1000);
//    protofolio js
    $('.portfolios').filterData({
			aspectRatio: '8:5',		
			nOfRow : 3,
			itemDistance : 0
		});
		$('.portfolio-controllers button').on('click',function(){
			$('.portfolio-controllers button').removeClass('active-work');
			$(this).addClass('active-work');
		});
    
//    according question js
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
   // back back-to-top 
 $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    },2000);
    return false;
  });
    // navbar part js

    //    stickytop menu
    $(window).scroll(function(){
       var scrolling=$(this).scrollTop();
        var sticky=$('.sticky_top');
        if(scrolling>50){
            sticky .addClass('menu_bg');
        }
        else{
              sticky .removeClass('menu_bg');
        }
    });
    
    // Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 150});

 var html_body = $('html, body');
 $('nav a').on('click', function () {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
             html_body.animate({
                 scrollTop: target.offset().top - 50
             }, 2000);
             return false;
         }
     }
 });
         //    preloader js
    $(window).on('load',function(){
        $('.loader').delay(2000).fadeOut(1000);
    });


    // navbar colspan js
 $(".nav-link").on("click", function(){
   $(".navbar-collapse").collapse("hide");
 });

    });