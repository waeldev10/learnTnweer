

function scrollFunction() {

    let toTopBtn = document.getElementById("toTopBtn");
        if(document.documentElement.scrollTop > 30){
            toTopBtn.style.display = "block" ;
        }else{
            toTopBtn.style.display = "none";
        }
       
}
    
function scrollToTop() {
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    scrollFunction();
};
    

// $(document).ready(function(e) {

// $('.slider').bxSlider({
// pager: false
// });
// });

$(window).on("scroll",function () {

    var bodyScroll = $(window).scrollTop(),
    navbar = $(".navbar1");

    if(bodyScroll > 50){
        $('.navbar-logo img').attr('src','assets/images/logo.svg');
        navbar.addClass("nav-scroll");
    }else{
        $('.navbar-logo img').attr('src','assets/images/logo_.svg');
        navbar.removeClass("nav-scroll");
    }
    
});

$(window).on("load",function (){
    var bodyScroll = $(window).scrollTop(),
    navbar = $(".navbar1");

    if(bodyScroll > 50){
        $('.navbar-logo img').attr('src','assets/images/logo.svg');
        navbar.addClass("nav-scroll");
    }else{
        $('.navbar-logo img').attr('src','assets/images/logo_.svg');
        navbar.removeClass("nav-scroll");
    }

    // $.scrollIt({

    // easing: 'swing',      
    // scrollTime: 900,       
    // activeClass: 'active', 
    // onPageChange: null,    
    // topOffset: -63
    // });
});



let icons = document.querySelectorAll(".icon");
let image = document.getElementById("imgs");

function chingeImage(img){

   image.src = img; 
   image.style.transitionDuration = "0.7s";

   for (const icon of icons) {

        icon.addEventListener("mouseleave", () => {
            image.src = 'assets/images/iphone-screen-with-shadow.png'; 
        });

    }

}





