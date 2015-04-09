/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function readyfreddy() {
    
    $('body').flowtype();
    
    "use strict";
    $(".navbar").ready(function movedown() {
        $("#ihatejquery")
            .delay(1200)
            .animate({ 'marginTop': '+57px' }, 1000);
    });
    
    $("liberum:child").ready(function fn() {
        $("#ilovejquery")
            .delay(200)
            .fadeIn(1600);
    });
    
    $("profilepicdiv:child").ready(function fn() {
        $("#thirdtimesthecharm")
            .delay(200)
            .fadeIn(1300);
    });
    
    $("#chevron_1").ready(function chevron_load(chevron_loop) {
        $("#chevron_1")
            .hide()
            .delay(2200);
    });
    
    $("#chevron_1").ready(function chevron_loop() {
        $("#chevron_1")
            .fadeIn(1300)
            .animate({ 'marginTop': '-15px' }, 300)
            .animate({ 'marginTop': '+15px' }, 150, 'linear')
            .fadeOut(1300, chevron_loop);
    });
    
    $(".chevron_bar").click(function chevron_scrollto() {
        $("html, body").animate({scrollTop: $("#chevron_1_scrollto").position().top}, 500);
        return false;
    });
    
});
