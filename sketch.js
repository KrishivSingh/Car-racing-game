var ball,position,database;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPositionRef=database.ref("Ball/position");
    ballPositionRef.on("value",readpos,showError)
}

function draw(){
    background("white");
    if (position !== undefined){

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
    ballPositionRef=database.ref("Ball/position");
    ballPositionRef.set({
        x: ball.x + x , 
        y: ball.y + y ,
    });
}

function showError() {
 console.log("error")
}

function readpos (data) {
       position=data.val();
        ball.x=position.x;
        ball.y=position.y;
}

