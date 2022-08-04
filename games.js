let gamePattern = [];
let userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];


/*How to mark the starting of the game */
var level=0;
var started=false;
$("*").keypress.too(function () { 
if(!started){
    // $("#level-title").html("Level "+level);
nextSequence();
 started=true;
}
});


function nextSequence() {
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
  
  
}


$(".btn").click(function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
      correctLevel(userClickedPattern.length-1);
   
});

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(() => {
        $("#"+currentColour).removeClass("pressed");
    }, 100);

}

function correctLevel(currentLevel) {
    if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
       console.log("win");
       if(gamePattern.length==userClickedPattern.length){
          
           setTimeout(() => {
         
               nextSequence();
           }, 1000);
       }
    }
    else{
      GameOver();
    }
    }



    function GameOver(){
        $("body").addClass("game-over");
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(() => {
           $("body").removeClass("game-over");
        }, 200);
       
            StartOver();
      
     }
    
     function StartOver() {
        gamePattern=[];
               level=0;
        started=false;
     }






