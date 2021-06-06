img="";
status="";
objects=[];
function preload(){
}
function setup(){
canvas=createCanvas(380, 380);
canvas.center();
object_detecter=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="detecting_objects";
}
function modelLoaded(){
    console.log("model_loaded");
    status=true;
}
function draw(){
if (status != ""){
    for(i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML="objects detected";
    document.getElementById("no.num").innerHTML="number of objects detected are- "+objects.length;
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+""+percent+"%", objects[i].x+ 15, objects[i].y+ 15);
    noFill();
    stroke("#ff0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}
function gotResults(results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    objects=results;
}
}