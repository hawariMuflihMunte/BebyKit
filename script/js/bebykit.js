$(document).ready(function(){

    var windowSize = $(window).width();

    // if ($('nav').parent().hasClass('navbar-fixed')) {
    // 	$('html').css('padding-top','50.66666px');
    // }

    $('.navbar-menu > a').attr('href','javascript:void(0);');
    $('.navbar-menu > a').click(function() {
        if ($('i.bk-menu').hasClass('bk-menu')) {
            $('i.bk-menu').removeClass('bk-menu').addClass('bk-cancel');
        } else {
            $('i.bk-cancel').removeClass('bk-cancel').addClass('bk-menu');
        }

        $('.navbar-link').toggleClass('activate');
    });

});