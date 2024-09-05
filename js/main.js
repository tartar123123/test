//extra scripts - zer09
$('.animate').scrolla({
    mobile: true,
    once: true
});

$(".carousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:"vertical"
});
$(window).scroll(function() {
    if($(this).scrollTop()>5) { 
        $(".navbar").addClass("fixed-me");
    } else {
        if($(this).scrollTop() == 0 && $(".navbar-toggler").hasClass("collapsed")) {
            $(".navbar").removeClass("fixed-me");
        }
    }
    if($(this).scrollTop()>5) { 
        $(".about-menu").addClass("hidden");
    } else {
        if($(this).scrollTop() == 0 && $(".navbar-toggler").hasClass("collapsed")) {
            $(".about-menu").removeClass("hidden");
        }
    }
    if ($(".navbar").hasClass("fixed-me")) {
        $(".navbar-brand source[media='(max-width: 640px)']").attr("srcset", "images/MDL_logo.svg");
        $(".navbar-brand source[media='(max-width: 1024px)']").attr("srcset", "images/MDL_logo-2L.svg");
        $("img.logo").attr("src", "images/MDL_logo.svg");
    } else {
        $(".navbar-brand source[media='(max-width: 640px)']").attr("srcset", "images/MDL_logo-white.svg");
        $(".navbar-brand source[media='(max-width: 1024px)']").attr("srcset", "images/MDL_logo-2L-white.svg");
        $("img.logo").attr("src", "images/MDL_logo-white.svg");
    }
    if($("body").hasClass("light") && $(".navbar").not("fixed-me")){
        $(".navbar-brand source[media='(max-width: 640px)']").attr("srcset", "images/MDL_logo.svg");
        $(".navbar-brand source[media='(max-width: 1024px)']").attr("srcset", "images/MDL_logo-2L.svg");
        $("img.logo").attr("src", "images/MDL_logo.svg");
    }      
});

$(".navbar-toggler").click(function() {
    if($(".navbar").not("fixed-me") && $(".navbar-toggler").hasClass("collapsed")){
        $(".navbar").addClass("fixed-me");
        $(".navbar-brand source[media='(max-width: 640px)']").attr("srcset", "images/MDL_logo.svg");
        $(".navbar-brand source[media='(max-width: 1024px)']").attr("srcset", "images/MDL_logo-2L.svg");
        $("img.logo").attr("src", "images/MDL_logo.svg");
    } else {
        $(".navbar").removeClass("fixed-me");
        if ($("body").not("light") && $(".navbar-toggler").not("collapsed")){
            $(".navbar-brand source[media='(max-width: 640px)']").attr("srcset", "images/MDL_logo-white.svg");
            $(".navbar-brand source[media='(max-width: 1024px)']").attr("srcset", "images/MDL_logo-2L-white.svg");
            $("img.logo").attr("src", "images/MDL_logo-white.svg");
        } 
    }
    if ($("body").hasClass("light")){
        $(".navbar-brand source[media='(max-width: 640px)']").attr("srcset", "images/MDL_logo.svg");
        $(".navbar-brand source[media='(max-width: 1024px)']").attr("srcset", "images/MDL_logo.svg");
        $("img.logo").attr("src", "images/MDL_logo.svg"); 
    }
});


// project highlight type
$(document).ready(function() {
    if($('.project-type:contains("Commercial")').length > 0) {
        $('a[data-filter=".commercial"]').addClass("active");
    } else if($('.project-type:contains("Hospitality")').length > 0) {
        $('a[data-filter=".hospitality"]').addClass("active");
    } else if($('.project-type:contains("Residential")').length > 0) {
        $('a[data-filter=".residential"]').addClass("active");
    } else if($('.project-type:contains("Sports")').length > 0) {
        $('a[data-filter=".sports"]').addClass("active");
    } else if($('.project-type:contains("Interior")').length > 0) {
        $('a[data-filter=".interior"]').addClass("active");
    } else if($('.project-type:contains("Master")').length > 0) {
        $('a[data-filter=".masterplan"]').addClass("active");
    } else if($('.project-type:contains("Sculpture")').length > 0) {
        $('a[data-filter=".sculpture"]').addClass("active");
    } else {
        $('a[data-filter=".commercial"]').removeClass("active");
    }
    if($('.project-type:contains("Commercial"):contains("Hospitality")').length > 0) {
        $('a[data-filter=".commercial"]').addClass("active");
        $('a[data-filter=".hospitality"]').addClass("active");
    }
    if($('.project-type:contains("Commercial"):contains("Hospitality"):contains("Sports")').length > 0) {
        $('a[data-filter=".commercial"]').addClass("active");
        $('a[data-filter=".hospitality"]').addClass("active");
        $('a[data-filter=".sports"]').addClass("active");
    }
    if($('.project-type:contains("Master"):contains("Hospitality")').length > 0) {
        $('a[data-filter=".masterplan"]').addClass("active");
        $('a[data-filter=".hospitality"]').addClass("active");
    }
});