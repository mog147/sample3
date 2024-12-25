$(function(){

    if ($(window).width() <= 768) {
        // スマホの場合の処理

                //表示非表示切替
        $(".header__menu").on("click",function(){

            if ($('.header__menu-bar').css('display') == "none") {

                // 非表示の場合の処理
                $("#target").addClass("fixed");      //id[target]を固定
                $('.header__menu-bar').slideToggle();//menu-barを開く

            } else {

                // 表示の場合の処理
                $("#target").removeClass("fixed");//id[target]を固定解除
                $('.header__menu-bar').hide();    //menu-barを閉じる
        
            }
        })
    }

    
});

$(function(){

    if ($(window).width() <= 768) {
        // スマホの場合の処理

                //表示非表示切替
        $(".header__menu-bar").on("click",function(){

            if ($('.header__menu-bar').css('display') == "none") {

                // 非表示の場合の処理
                $("#target").addClass("fixed");
                $('.header__menu-bar').slideToggle();

            } else {

                // 表示の場合の処理
                $("#target").removeClass("fixed");
                $('.header__menu-bar').hide();
        
            }
        })
    }


    
});





