/**
 * Created by abc on 2016/04/24.
 */
// 上へ戻るボタン

$(function() {

    var showFlag = false;
    var pagetop = $('#pagetop');
    pagetop.css('bottom', '-50px');
    var showFlag = false;

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                pagetop.stop().animate({'bottom' : '8rem'}, 0);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                pagetop.stop().animate({'bottom' : '-50px'}, 0);
            }
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});