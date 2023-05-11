function setup()
{
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(600,600);
    canvas.position(560,150);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function draw()
{
    background("#6699ff");
}
function modelloaded()
{
    console.log("poseNet");
}
function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}