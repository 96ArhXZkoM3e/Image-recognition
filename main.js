Webcam.set(
    {
        width:350,
        height:300,
        image_format:"png",
        png_quality:90
    }
)
camera=document.getElementById("camera")
Webcam.attach("#camera")//It opens the camera


function take_snapshot()
{
    Webcam.snap(function(data_uri)  //Used to take a snapshot
    {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    }
    )
}
console.log("ml5 version is",ml5.version)
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelLoaded)

function modelLoaded()
{
    console.log("model is Loaded")
}

