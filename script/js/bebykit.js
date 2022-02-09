$(document).ready(function(){

    var windowSize = $(window).width();
    // if ($('nav a').hasClass('icon')) {
    // 	$('nav a.icon').attr('href','javascript:void(0)');
    // }

    if ($('nav').parent().hasClass('navbar-fixed')) {
    	$('html').css('padding-top','50.66666px');
    }

    /* Buat elemen baru tanpa menampilkannya
    berguna untuk meletakkan elemen-elemen yang berada di
    [ nav ul ] */
    if ($('nav > a').hasClass('center')) {
        $('nav ul').before("<a class='opacity-none'></a>");
    }

    $('nav > a.menu').attr('href','javascript:void(0);');

    $('nav > a.menu').click(function(){
        if ($('nav ul').hasClass('reveal-menu')) {
            $('nav ul').removeClass('reveal-menu');
            $('nav ul').addClass('hide-menu');
        } else {
            $('nav ul').removeClass('hide-menu');
            $('nav ul').addClass('reveal-menu');
        }
    });

    // if ($('nav').hasClass('light-text')) {
    //     $(this).children().find('a').css({
    //         'color': 'var(--light)'
    //     });
    // }


    // Hapus untuk produksi nanti: hanya untuk halaman dokumentasi saja
    $('#navbar-example-1-copy').click(function(){
        var val = $('#navbar-example-1').text();
        document.execCommand('copy', val);
    });

});