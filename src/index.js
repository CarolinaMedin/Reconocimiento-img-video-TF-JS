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
}

startVideo(); 

    Promise.all([
        faceapi.nets.tinyFaceDector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        faceapi.nets.ageGenderNet.loadFromUri('/models'),
    ])