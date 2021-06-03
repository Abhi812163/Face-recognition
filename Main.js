Webcam.set({
    wodth:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

console.log('ml5 version', ml5.version)

function take_snashot(){
    Webcam.snap (function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json',modelLoaded)