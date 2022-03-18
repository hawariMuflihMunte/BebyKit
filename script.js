$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $('nav').addClass('shadow-s light-bg blue-text');
            // $('nav *').addClass('blue-text');
            $("nav [class*='btn-']").addClass('btn-blue');
            $("nav *[class*='dropdown'] > .btn").addClass('blue-text');
            $('.change-color').addClass('light-bg').removeClass('blue-bg');
        } else {
            $('nav').removeClass('shadow-s light-bg blue-text');
            // $('nav *').removeClass('blue-text');
            $("nav [class*='btn-']").removeClass('btn-blue');
            $("nav *[class*='dropdown'] > .btn").removeClass('blue-text');
            $('.change-color').removeClass('light-bg').addClass('blue-bg');
        }
    });

    $('.menu-drop').click(function(){
        if ($(this).next('ul').hasClass('hidden-s-to-lower')) {
            $(this).next('ul').removeClass('hidden-s-to-lower');
        } else {
            $(this).next('ul').addClass('hidden-s-to-lower');
        }
    });

    function fetchHtml() {
        var html = $('.html').val();
        return html;
    }

    function fetchCss() {
        var css = $('.css').val();
        return css;
    }

    $('textarea.html, textarea.css').on('keyup', function(){
        var target = $('.preview')[0].contentWindow.document;
        target.open();
        target.close();

        var html = fetchHtml();
        var css = fetchCss();

        $('body', target).append(html);
        $('head', target).append(`<style>${css}</style>`);
        $('head', target).append(`<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/hawariMuflihMunte/BebyKit@main/assets/script/css/bebykit.fix.css'>`);
    });
});