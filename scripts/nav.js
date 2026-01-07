$("#nav-expand").click(function (e) {
    $("#global-nav").slideToggle();

});

onLoad();

function resizeLogic() {


    if ($(window).width() > 760) {
        $("#global-nav").css("display", "flex");
    }

}

$(window).resize(function () {
    resizeLogic();
    if ($(window).width() <= 760) {
        $("#global-nav").css("display", "none");
    }
});

resizeLogic();

$("#jump-to-section li a").click(function (e) {
    e.preventDefault();
    console.log("clicked" + e.target.dataset.section);
    $("#work-content section").fadeOut();

    $(e.target.dataset.section).fadeIn();
    $(e.target.dataset.section).removeClass("hidden");



});