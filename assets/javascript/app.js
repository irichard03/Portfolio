//Variable Declarations
/*disabled radio
var radio = {
    radioState: 0,
    song: new Sound("assets/music/ArtieShaw.mp3")
};  
*/

var myPage = {
    aboutMeState: 0,
    portFolioState: 0,
    contactMeState: 0
}

//Click event to display About Me
$('#aboutMeButton').click(function(){
    if (!myPage.aboutMeState){
        $('.card').css('visibility','hidden');
        myPage.portFolioState = 0;
        myPage.contactMeState = 0;
        $('#aboutMeCard').css('visibility','visible');
        myPage.aboutMeState = 1;
    }
    else {
        $('#aboutMeCard').css('visibility','hidden');
        myPage.aboutMeState = 0;
    }

});

//Click event to display Portfolio
$('#portfolioButton').click(function(){
    if (!myPage.portFolioState){
        $('.card').css('visibility','hidden');
        myPage.aboutMeState = 0;
        myPage.contactMeState = 0;
        $('#portFolioCard').css('visibility','visible');
        myPage.portFolioState = 1;
    }
    else {
        $('#portFolioCard').css('visibility','hidden');
        myPage.portFolioState = 0;
    }

});

//Click event to play display contact Card
$('#contactButton').click(function(){
    if (!myPage.contactMeState){
        $('.card').css('visibility','hidden');
        myPage.aboutMeState = 0;
        myPage.portFolioState = 0;
        $('#contactCard').css('visibility','visible');
        myPage.contactMeState = 1;
   }
   else {
        $('#contactCard').css('visibility','hidden');
        myPage.contactMeState = 0;
   } 
});

//Click event to play radio sound clip
/*disabled radio
$('#toggleRadio').click(function(){
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
*/

//Check out W3CSCHOOLS for instructions on how to include sound on your own webpage, like this function.
/*  Disabled radio
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
*/