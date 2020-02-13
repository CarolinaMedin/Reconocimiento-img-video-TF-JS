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


    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        faceapi.nets.ageGenderNet.loadFromUri('/models'),
    ]).then(startVideo);

video.addEventListener('play', ()=> {
    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);
    const displaySize = { width: video.width, heigth: video.heigth };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async()=> {
        const detections = await faceapi.detecAllFaces(video, 
        new faceapi.TinyFaceDetectorOptions());
        const resizedDetections = faceapi.resizedResults(detections,
        displaySize);
        canvas.getContex('2d').clearRect(0, 0, canvas.width, canvas.heigth);
        faceapi.draw.drawDetections(canvas, resizedDetections);

    }, 100);
});