

let song_title = document.getElementById("song_title");
let artist = document.getElementById("artist");
let back = document.getElementById("back");
let plays = document.getElementById("play");
let next = document.getElementById("next");
let music = document.getElementById("music");
let img = document.getElementById("img");
let song = false;


//song of array
let songs = [
    {
        title: "Banjaara",
        Artists: "Mohammad Irfan",
        name: "san1.mp3",
    },
    {
        title: "Mai Bhola parbat ka",
        Artists: "Haryanvi",
        name: "san2.mp3",
    },
    {
        title: "Rachaye srshti ko",
        Artists: "pagaliWorld.com",
        name: "san3.mp3",
    }

];


//play and pause button

plays.addEventListener("click", () => {
    song ? ispause() : isplay();
});


//play function
 const isplay = () => {
    music.play();
    song = true;
    plays.classList.add("fa-pause");
    plays.classList.remove("fa-play");
    img.classList.add("cd");

}
//pause function
 const ispause = () => {
    music.pause();
    song = false;
    plays.classList.remove("fa-pause");
    plays.classList.add("fa-play");
    img.classList.remove("cd");
}

//song loading function
 const songload =(songs)=>{
    song_title.innerText = songs.title;
    artist.innerText = songs.Artists;
    music.src = `music/${songs.name}`;


 }

//next button
let songIndex = 0;
next.addEventListener("click", () => {
    songIndex = (songIndex+1)%songs.length;
    songload(songs[songIndex])
    isplay();
})

//back button
back.addEventListener("click",()=>{
    songIndex = (songIndex-1 + songs.length)%songs.length;
    songload(songs[songIndex])
    isplay();
})
































