const video = document.getElementById("video");

function startVideo(){
    navigator.getUserMedia = (navigator.getUserMedia || 
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

    navigator.getUserMedia(
        { video: {} },
    stream => video.srcObject = stream,
    err = console.log(err)
    
    )

    startVideo();
}