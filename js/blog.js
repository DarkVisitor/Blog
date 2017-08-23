

$(document).on('click', '.back-to-top', function () {
    goScrollTop();
});

/*缓慢滚动到顶部*/
function goScrollTop() {
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    //向上是负数，向下是正数
    window.scrollBy(0, -100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('goScrollTop()', 100);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；
    // 因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if (sTop == 0) clearTimeout(scrolldelay);
}

/*根据滚动条与顶部的高度自动显示或隐藏*/
function goTop(){

    $(window).scroll(function () {
        var s = $(this).scrollTop();
        if (s > 100){
            $(".back-to-top").fadeIn(100);
        }else{
            $(".back-to-top").fadeOut(200);
        }
    });
}

/*导航鼠标悬停事件*/
function navHover() {
    $('.dropdown').hover(function () {
        $(this).addClass('active');
        $(this).addClass('show');
        $(this).children('.dropdown-menu').addClass('show');
    }, function () {
        $(this).removeClass('active');
        $(this).removeClass('show');
        $(this).children('.dropdown-menu').removeClass('show');
    })
}


$(document).ready(function () {
    goTop();
    navHover();
});