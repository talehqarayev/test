
$(document).ready(function(){
    
    $(".header_slider_item").slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<img src="icons/toleft.svg" class="slick-prev">',
        nextArrow: '<img src="icons/toright.svg" class="slick-next">',
        autoplay: false,
        autoplaySpeed: 3000
    });


    // Modal window

    $("[data-modal=consultation]").on("click", function() {

        $(".overlay, #consultation").fadeIn("fast");

        });

    $(".modal_close").on("click", function() {

        $(".overlay, #consultation").fadeOut("fast");
        });


    $(".overlay").on("click", function() {

        if ($(event.target).closest("#consultation").length) return;
        $(".overlay").fadeOut("slow");
        event.stopPropagation();
        });


    // Modal_mini window

    $("[data-modal=info]").on("click", function() {

        $(".overlay_mini, #info").fadeIn("slow");

        });
    
    $(".modal_mini_close").on("click", function() {

        $(".overlay_mini, #info").fadeOut("fast");
        });
    
    $(".overlay_mini").on("click", function() {

        if ($(event.target).closest("#info").length) return;
        $(".overlay_mini").fadeOut("slow");
        event.stopPropagation();
        });
    
    $("input[name=phone]").mask("+7(999) 999-99-99");


});