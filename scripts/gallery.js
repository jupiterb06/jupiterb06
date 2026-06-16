
var distanceFromTop = 0; 


$("#close-modal").click(function (e) {
    $("#transparency").addClass("hidden");
    $("body").removeClass("stop-scroll");
        $("html").removeClass("stop-scroll");



});

$(document).keydown(function (e) {
    if (e.key == "Escape")
        $("#transparency").addClass("hidden");
    $("body").removeClass("stop-scroll");
        $("html").removeClass("stop-scroll");





});

$(".gallery").on ("click", "img", (function (e) {


    $("#transparency").removeClass("hidden");


    $("#modal-img").attr("src", e.target.src);
    $("#modal-img").attr("alt", e.target.alt);


    $("#work-title").text(e.target.dataset.title);
    $("#size").text(e.target.dataset.size);
    $("#medium").text(e.target.dataset.medium);
    $("#desc").text(e.target.dataset.desc);

    $("#modal").scrollTop(0);

    // distanceFromTop = window.scrollY; 

    // console.log(distanceFromTop);
    // window.scrollTo(0,distanceFromTop);
    $("body").addClass("stop-scroll");
        $("html").addClass("stop-scroll");

    
    

}));

$(".gallery img").hover(function (e) {
    $(e.target).animate({
        borderRadius: '20px',
        opacity: '0.3'
    });        // over

}, function (e) {
    // out
        $(e.target).animate({
        borderRadius: '0px',
        opacity: '1'
    });  
}
);

$(".vid-gallery iframe").hover(function (e) {
    $(e.target).animate({
        borderRadius: '20px',
    });        // over

}, function (e) {
    // out
        $(e.target).animate({
        borderRadius: '0px',
    });  
}
);

$(".art-tech-gallery iframe").hover(function (e) {
    $(e.target).animate({
        borderRadius: '20px',
    });        // over

}, function (e) {
    // out
        $(e.target).animate({
        borderRadius: '0px',
    });  
}
);


