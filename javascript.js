let audioIndex=0;
let audioElement= new Audio ('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));


let songs=[

{songName : "Let me Love You", filePath: "songs/1.mp3", songCover:"covers/1.jpg"},
{songName: "Until I found You", filePath:"songs/2.mp3",songCover: "covers/2.jpg"},
{songName: "Glimpses of us", filePath:"songs/3.mp3",songCover: "covers/3.jpg"},
{songName: "Gonna Be okay", filePath:"songs/4.mp3",songCover: "covers/4.jpg"},
{songName: "Perfect", filePath:"songs/5.mp3",songCover: "covers/5.jpg"},
{songName: "Mocking Bird", filePath:"songs/6.mp3",songCover: "covers/6.jpg"},
{songName: "Tu te main", filePath:"songs/7.mp3",songCover: "covers/7.jpg"},
{songName: "Tune jo na kaha", filePath:"songs/8.mp3",songCover: "covers/8.jpg"},
{songName: "Tu jaane na", filePath:"songs/9.mp3",songCover: "covers/9.jpg"},


]



songItems.forEach((element, i) =>{

element.getElementsByTagName('img')[0].src=songs[i].songCover;
element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
})
//Handle PLay Pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
       
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    


})
//Time update Event
audioElement.addEventListener('timeupdate',()=>{

progress= parseInt((audioElement.currentTime/audioElement.duration) *100);
myProgressBar.value=progress;


})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
   
    })
}   


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    
    element.addEventListener('click',(e)=>{
        
        makeAllPlays();

        audioIndex= parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${audioIndex+1}.mp3`;
        masterSongName.innerText= songs[audioIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{

    if(audioIndex>=9){
        audioIndex=0;
    }
    else{
        audioIndex=audioIndex+1;

    }
    audioElement.src = `songs/${audioIndex+1}.mp3`;
    masterSongName.innerText= songs[audioIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
if(audioIndex<=0){
    audioIndex=0
}
else{
    audioIndex-=1;
}
audioElement.src = `songs/${audioIndex+1}.mp3`;
masterSongName.innerText= songs[audioIndex].songName; 
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})