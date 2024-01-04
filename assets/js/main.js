
let myTop = document.getElementById("toTopBtn");
    
window.onscroll = () => {

    if(window.scrollY < 500){
      myTop.style.opacity = "0";
    }else{
      myTop.style.opacity = "1";
    }
}

myTop.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior:"smooth"
    });
});


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





