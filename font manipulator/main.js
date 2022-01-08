function setup()

{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(530,420);
    canvas.position(560,140);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function gotPoses(results)

{
if(results.lens>0);
console.log(results);

}

function modelLoaded()

{
    console.log("poseNet is Inishalised");
}

function draw()

{
    background("#f48fb1");
}