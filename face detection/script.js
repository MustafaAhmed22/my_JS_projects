var video = document.querySelector("video");

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models'),
]).then(startWebCam())

function startWebCam() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
                video: true,
                audio:false
            })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });
    }
}
video.addEventListener('play',()=>{
    let canvas =faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const display ={
        width:video.width,
        height:video.height
    }
    faceapi.matchDimensions(canvas,display)
    setInterval(async()=>{
        let detection = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        console.log(detection)
        const resize =faceapi.resizeResults(detection,display)
        canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height)
        faceapi.draw.drawDetections(canvas,resize)

    },100)
})