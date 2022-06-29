var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 20;
block_img_width = 30;
block_img_height = 30;
var player_object = "";
var block_img_object = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object)
    });
}

function new_img(get_img) {
    fabric.Image.fromURL(get_img, function(Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
block_img_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_img_object)
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log("key pressed " + keyPressed)
    if(e.shiftKey == true && keyPressed == "187"){
        console.log("shift and + key pressed");
        block_img_height = block_img_height + 8;
        block_img_width = block_img_width + 8;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(e.shiftKey == true && keyPressed == "189"){
        console.log("shift and - key pressed");
        block_img_height = block_img_height - 8;
        block_img_width = block_img_width - 8;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height; 
}

if(keyPressed == "37"){
    console.log("left key pressed");
    left();
}

if(keyPressed == "38"){
    console.log("up key pressed");
    up();
}
if(keyPressed == "39"){
    console.log("right key pressed");
    right();
}
if(keyPressed == "40"){
    console.log("down key pressed");
    down();
}
if(keyPressed == "87"){
    console.log("w key pressed");
    new_img("wall.jpg");
}
if(keyPressed == "71"){
    console.log("g key pressed");
    new_img("ground.png");
}
if(keyPressed == "76"){
    console.log("l key pressed");
    new_img("light_green.png");
}
if(keyPressed == "84"){
    console.log("t key pressed");
    new_img("trunk.jpg");
}
if(keyPressed == "82"){
    console.log("r key pressed");
    new_img("roof.jpg");
}
if(keyPressed == "89"){
    console.log("y key pressed");
    new_img("yellow_wall.png");
}
if(keyPressed == "68"){
    console.log("d key pressed");
    new_img("dark_green.png");
}
if(keyPressed == "85"){
    console.log("u key pressed");
    new_img("unique.png");
}
if(keyPressed == "67"){
    console.log("c key pressed");
    new_img("cloud.jpg");
}
    if(keyPressed == "80"){
    console.log("p key pressed");
    new_img("pig.png");
}
}

function up(){
    if(player_y >= block_img_height){

    
    player_y = player_y - block_img_height;
    console.log("Up button has been pressed, Player X = " + player_x + ", Y = " + player_y);
    console.log("block height = " + block_img_height)
    canvas.remove(player_object);
    playerupdate();
}
}
function down(){
    if(player_y <= 500-block_img_height){
    player_y = player_y + block_img_height;
    console.log("Down button has been pressed, Player X = " + player_x + ", Y = " + player_y);
    console.log("block height = " + block_img_height)
    canvas.remove(player_object);
    playerupdate();
    }
}

function left(){
    if(player_x >= block_img_width){
    player_x = player_x - block_img_width;
    console.log("Left button has been pressed, Player X = " + player_x + ", Y = " + player_y);
    console.log("block width = " + block_img_width)
    canvas.remove(player_object);
    playerupdate();
    }
}
function right(){
    if(player_x <= 910-block_img_width){
    player_x = player_x + block_img_width;
    console.log("Right button has been pressed, Player X = " + player_x + ", Y = " + player_y);
    console.log("block width = " + block_img_width)
    canvas.remove(player_object);
    playerupdate();
    }
}
