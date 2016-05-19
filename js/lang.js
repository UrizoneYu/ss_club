/**
 * Created by abc on 2016/04/24.
 */
// 言語切替

$(function(){

    $(".en").hide();
    $("a.switch_jp").addClass("curr_lang");

    // by cookie
    if( $.cookie( "cookie_lang" ) == "jp" ){ show_jp(); }
    else if( $.cookie( "cookie_lang" ) == "en" ){ show_en(); }

    // by click
    $("a.switch_jp").on("click", function() { show_jp(); } );
    $("a.switch_en").on("click", function() { show_en(); } );

    function show_jp(){
        $(".en").hide();
        $(".jp").show();
        $("a.switch_jp").addClass("curr_lang");
        $("a.switch_en").removeClass("curr_lang");
        $.cookie("cookie_lang", "jp", { expires: 7, path: "/" });
    }

    function show_en(){
        $(".jp").hide();
        $(".en").show();
        $("a.switch_en").addClass("curr_lang");
        $("a.switch_jp").removeClass("curr_lang");
        $.cookie("cookie_lang", "en", { expires: 7, path: "/" });
    }

});
