$("#nav-expand").click(function (e) {
    $("#logo-div-1").toggle();



    $("header nav").toggleClass("stick-to-top");
    
    $("#logo-div-2").toggle();
    $("#global-nav").slideToggle();

    $("#nav-expand").toggleClass("current-page");


});

$("#logo-div a").hover(function (e) {
    $("#logo-div a img").attr("src", "/workspaces/jupiterbhanot/images/name-logo-hover.svg"); 

    // $("#logo-div a img").animate({
    //     opacity: '0.3'
    // });

    console.log("hover");
    // over

}, function () {

    // $("#logo-div a img").animate({
    //     opacity: '1'
    // });
    // out
    $("#logo-div a img").attr("src", "/workspaces/jupiterbhanot/images/name-logo-blue.svg");

}
);

$("#logo-div-2 a").hover(function (e) {
    $("#logo-div-2 a img").attr("src", "/workspaces/jupiterbhanot/images/name-logo-hover.svg");

    // $("#logo-div a img").animate({
    //     opacity: '0.3'
    // });

    console.log("hover");
    // over

}, function () {

    // $("#logo-div a img").animate({
    //     opacity: '1'
    // });
    // out
    $("#logo-div-2 a img").attr("src", "/workspaces/jupiterbhanot/images/name-logo-blue.svg");

}
);

const mediaQuery = window.matchMedia("(max-width: 760px)");

function handleDeviceChange(e) {
    if (e.matches) {
        $("#global-nav").css("display", "none");
    } else {
        $("#global-nav").css("display", "flex");
        $("#logo-div-2").css("display", "none");

        $("header nav").removeClass("stick-to-top");
        // $("#logo-div-2").addClass("hidden");


    }
}

handleDeviceChange(mediaQuery);
mediaQuery.addEventListener("change", handleDeviceChange);


let currentSection = "#painting-drawing";


$("#jump-to-section li a").click(function (e) {
    e.preventDefault();
    $(currentSection + "-btn").removeClass("current-page");


    $("#work-content section").fadeOut();
    $(currentSection).addClass("hidden");

    $(e.target.dataset.section).removeClass("hidden");

    $(e.target.dataset.section).fadeIn();
    currentSection = e.target.dataset.section;
    $(currentSection + "-btn").addClass("current-page");


});