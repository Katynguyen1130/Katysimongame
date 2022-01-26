
var gamePattern =[];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;


$(document).keypress( function () {
if (!started) {
  $("h1").text("Level " + level)
  nextSequence()
  started = true;
}

});


function abc() {alert("hell0")};

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomChosenColour);
level = level +1 ;
$("h1").text("Level " + level);

  };

$(".btn").on("click",
function (event) {
  var userChoosenColor = $(this).attr('id');
  userClickedPattern.push(userChoosenColor);
  $("#"+userChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(userChoosenColor);
checkAnswer(userClickedPattern.length-1);

});



function playsound(name) {
  var soundName = "./sounds/"+ name +".mp3";
 console.log (soundName);
  var myAudio = new Audio(soundName);
  myAudio.play();
};






function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      userClickedPattern=[];
    }
} else {
  console.log("wrong");
  playsound("wrong");
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over"),200
  });
  $("h1").text("Game Over, Press Any Key to Restart");
  startOver();

}
};

function startOver() {
  gamePattern = [];
  level =0;
  started = false;
  userClickedPattern = [];
}
