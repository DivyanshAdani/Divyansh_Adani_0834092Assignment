$(document).ready(function () {
    $(".accordion h2").click(function () {
        $(this).next(".accordion-content").slideToggle();
        $(".accordion-content").not($(this).next()).slideUp();
    });

    $(".tab-nav li").click(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab-content .tab-panel").eq(index).show().siblings().hide();
    });

    $(".tab-nav li:first").addClass("active");
    $(".tab-content .tab-panel:first").show();
});
