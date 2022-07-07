video="";
object=[];
status="";

function preload(){
video=createVideo("video");

}
function setup(){
canvas=createCanvas(500,400);
canvas.center();
video.hide();
}
function draw(){
image(video,0,0,500,400);
}
function start(){
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:detecting object";

}
function modelLoaded(){
    console.log("model is loaded");
    video.loop();
    video.speed(1);
    video.volume(0);
    
}