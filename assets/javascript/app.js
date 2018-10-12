//Variable Declarations

var radio = {
    radioState: 0,
    song: new Sound("assets/music/ArtieShaw.mp3")
};  


//Click event to display About Me
$('#aboutMe').click(function(){
    $('.card').css('visibility','visible');
});

//Click event to play radio sound clip
$('#toggleRadio').click(function(){
   console.log("The Radio Plays");
    if (!radio.radioState){
       radio.song.play();
       radio.radioState = 1;
   }
   else {
        console.log("The Radio Stops");
        radio.song.stop();
        radio.radioState = 0;
   } 
});


//Check out W3CSCHOOLS for instructions on how to include sound on your own webpage, like this function.
function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}