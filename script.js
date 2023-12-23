$(document).ready(function() {
    $(".social-icon").mouseenter(function() {
        $(this).find('span, iconify-icon').css("color", "#FFF");
    }).mouseleave(function() {
        $(this).find('span, iconify-icon').css("color", "#555555");
    });
});
