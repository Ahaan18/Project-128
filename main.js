song1 = "";
song2 = "";
leftwristx = 0;
rightwristx = 0;
leftwristy = 0;
rightwristy = 0;
function preload(){
    song1 = loadSound("destiny.mp3");
    song2 = loadSound('live-while-were-young.mp3');
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    x = ml5.poseNet(video, modeloaded);
    x.on('pose', gotposes);
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function modeloaded(){
    console.log("AI DJ MUSIC APP™®© IS READY TO FUNCTION!");
}
function gotposes(result){
    if(result.length > 0){
        console.log(result);
        rightwristy = result[0].pose.rightWrist.y;
        leftwristy = result[0].pose.leftWrist.y;
        leftwristx = result[0].pose.leftWrist.x;
        rightwristx = result[0].pose.rightWrist.x;
        console.log("rightwristx ", rightwristx, "y ", rightwristy, "leftwristx ", leftwristx, "y", leftwristy);
    }
}