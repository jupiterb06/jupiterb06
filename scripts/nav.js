$("#nav-expand").click(function (e) {
    $("#logo-div-1").toggle();



    $("header nav").toggleClass("stick-to-top");
    
    $("#logo-div-2").toggle();
    $("#global-nav").slideToggle();

    $("#nav-expand").toggleClass("current-page");


});

$("#logo-div a").hover(function (e) {
    $("#logo-div a img").attr("src", "/images/name-logo-hover.svg"); 

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
    $("#logo-div a img").attr("src", "/images/name-logo-blue.svg");

}
);

$("#logo-div-2 a").hover(function (e) {
    $("#logo-div-2 a img").attr("src", "/images/name-logo-hover.svg");

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
    $("#logo-div-2 a img").attr("src", "/images/name-logo-blue.svg");

}
);

$("#nav-work").hover(function (e) {
    $("#nav-work img").attr("src", "/images/icons/work-hover.svg");

    // $("#logo-div a img").animate({
    //     opacity: '0.3'
    // });

    console.log("hover");
    // over

}, function () {

    if(!$("#nav-work").hasClass("nav-current")){
            $("#nav-work img").attr("src", "/images/icons/work.svg");
    }
    //     opacity: '1'
    // });
    // out


}
);


$("#nav-about").hover(function (e) {
    $("#nav-about img").attr("src", "/images/icons/about-hover.svg");

    console.log("hover");
    // over

}, function () {


    if(!$("#nav-about").hasClass("nav-current")){
        $("#nav-about img").attr("src", "/images/icons/about.svg");
    }


}
);

$("#nav-cv").hover(function (e) {
    $("#nav-cv img").attr("src", "/images/icons/cv-hover.svg");

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
    
    if(!$("#nav-cv").hasClass("nav-current")){
            $("#nav-cv img").attr("src", "/images/icons/cv.svg");

    }


}
);

$("#nav-contact").hover(function (e) {
    $("#nav-contact img").attr("src", "/images/icons/contact-hover.svg");

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

        if(!$("#nav-contact").hasClass("nav-current")){
                $("#nav-contact img").attr("src", "/images/icons/contact.svg");
        }



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