$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
    });


   // toggle menu/navbar script
   $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
});

 // typing text animation script
 var typed = new Typed(".typing", {
    strings: ["Graphic Designer", "Web Designer", "Web Developer", "UI/UX Designer", "Video Editor", "Video Animator"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Graphic Designer", "Web Designer", "Web Developer", "UI/UX Designer", "Video Editor", "Video Animator"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
