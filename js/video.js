var video = document.querySelector("#video"),
    button = document.querySelector(".video-wrap__btn");

button.addEventListener("click", function () {
    video.play()
    video.setAttribute("controls", "controls");
}, false);

$(".video-wrap__btn").click(function () {
    $(".video-wrap").addClass('video-wrap__hide');
})