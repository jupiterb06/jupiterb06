
$("#close-modal").click(function (e) { 
    $("#transparency").addClass("hidden");
});

$(".gallery img").click(function (e) { 
    $("#transparency").removeClass("hidden");
    $("#modal-img").attr("src", e.target.src);
    $("#modal-img").attr("alt", e.target.alt);


    $("#work-title").text(e.target.dataset.title);
    $("#size").text(e.target.dataset.size);
    $("#medium").text(e.target.dataset.medium);
    $("#desc").text(e.target.dataset.desc);



});