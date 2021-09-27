leftwristX = 0;
leftwristY = 0;

rightwristX = 0;
rightwristY = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(350,350);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose',gotPoses);

}
function draw() {
    background(12, 236, 247);
    textSize(diffrence);
    fill('red');
    text(Peter,58,400);
}
function ModelLoaded() {
    console.log('PoseNet is intilize');
  

}
function gotPoses(results) {
    console.log(results);
if(results.length> 0){console.log(results)}
leftwristX = results[0].pose.leftWrist.x;
rightwristX = results[0].pose.rightWrist.x;
diffrence =floor(leftwristX - rightwristX);
}

