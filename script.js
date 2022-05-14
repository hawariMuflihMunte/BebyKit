$(document).ready(function(){
    $(".minimize").click(function(){
        if($(this).parents(".bk-code-template").find(".bk-code-header-minimized").hasClass("hidden")) {
            $(this).parents(".bk-code-template").find(".bk-code-header-minimized").removeClass("hidden");
            $(this)
            .parents(".bk-code-template")
            .find(".bk-code-header, .bk-code-file, .bk-code-content")
            .hide("0.15");
            // Remove shadow from parents(".bk-code-template")
            $(this).parents(".bk-code-template").removeClass("shadow-small");
        } else {
            $(this).parents(".bk-code-template").find(".bk-code-header-minimized").addClass("hidden");
            $(this)
            .parents(".bk-code-template")
            .find(".bk-code-header, .bk-code-file, .bk-code-content")
            .show("0.15");
            // Display shadow from parents(".bk-code-template")
            $(this).parents(".bk-code-template").addClass("shadow-small");
        }
   });

   $(".close-code").click(function(){
        $(this)
            .parents(".bk-code-header")
            .nextAll()
            .addClass("hidden");
   });

   $(".maximize").click(function(){
        $(this)
            .parents(".bk-code-header")
            .nextAll()
            .removeClass("hidden");
   });

   $(".close-code-file").click(function(){
        // Hide [x] and change to square icon []
        $(this).children("i.bi-app").toggleClass("hidden");
        // Hide square icon [] and change to x
        $(this).children("i.bi-x").toggleClass("hidden");
        $(this)
            .parents(".bk-code-file")
            .nextAll()
            .toggleClass("hidden");
        // Hide copy image when the code content is not displayed
        $(this)
            .parents(".bk-code-file")
            .find(".code-copy")
            .toggleClass("hidden");
   });

//    $(".legend-on-mobile").click(function(){
//        $(".legend-on-mobile-content").toggleClass("hide-legend-on-mobile-content");
//    });

   $(".docs").click(function(){
        $("html, body").addClass("overflow-hidden");
        $(".docs-modal").addClass("docs-indexer");
   });

   $(".close-docs-modal").click(function(){
        $("html, body").removeClass("overflow-hidden");
        $(".docs-modal").removeClass("docs-indexer");
    });

    /*$(".code-copy-val").click(function(){
        var $codeVal =
            $(this)
                .parents(".bk-code-file")
                .next(".bk-code-content")
                .children()
                .find("textarea.code-value")
                .val();
        // $("body").append($codeVal);
        $codeVal.select();
        document.execCommand("copy");
        $codeVal.remove();
    }); */
});