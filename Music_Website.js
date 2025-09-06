import {musicArray} from './music.js';

let playBtn=document.querySelector('.Play2');
let backwardBtn=document.querySelector('.backward');
let forwardBtn=document.querySelector('.forward');
let pauseBtn=document.querySelector('.pause');
let songAlbum=document.querySelector('.albumCover');
let songName=document.querySelectorAll('.musicName');
let gifImage=document.querySelector('.gifImage');
let songDuration=document.querySelector('.duration');
let currentTime=document.querySelector('.currentTime');
let progressBar=document.getElementById('myProgressBar');
let discoBall=document.querySelector('.discoBall');

let musicIndex=0;
const audio=new Audio(musicArray[musicIndex].songItem);
audio.addEventListener('loadedmetadata',()=>{
  audio.duration;
  showMe();
});

document.addEventListener('keypress',(e)=>{
  console.log(e.key);
})

let isMusicPlaying=false;

playBtn.addEventListener('click',()=>{
  if(isMusicPlaying){
    showAlbum(musicIndex,'N');
    showName(musicIndex);
    audio.pause();
    playBtn.classList.remove('deactiveBtn');
    pauseBtn.classList.remove('activeBtn');
    songDuration.classList.add('active');
    showMe();
  }else{
    showAlbum(musicIndex,'Y');
    showName(musicIndex);
    audio.play();
    playBtn.classList.add('deactiveBtn');
    pauseBtn.classList.add('activeBtn');
    songDuration.classList.add('active');
    showMe();
  }
  isMusicPlaying=!isMusicPlaying;
});

backwardBtn.addEventListener('click',()=>{
  musicIndex = (musicIndex-1+musicArray.length)%musicArray.length;
  audio.src=musicArray[musicIndex].songItem;
  showAlbum(musicIndex,'Y');
  showName(musicIndex);
  audio.play(); 
  console.log(musicIndex);
  songDuration.classList.add('active');
  showMe();
});

forwardBtn.addEventListener('click',()=>{
  musicIndex = (musicIndex+1)%musicArray.length;
  audio.src = musicArray[musicIndex].songItem;
  showAlbum(musicIndex,'Y');
  showName(musicIndex);
  audio.play();
  songDuration.classList.add('active');
  showMe();
});

function showAlbum(songIndex,trig){
  songAlbum.src=musicArray[songIndex].songAlbum;

  if(trig==='Y'){
    songAlbum.classList.add('spin');
    gifImage.classList.add('active');
    discoBall.style.opacity=1;
  }else{   
    songAlbum.classList.remove('spin');
    gifImage.classList.remove('active');
    discoBall.style.opacity=0;
  }
}

function showName(songIndex){
  songName.forEach(name => {
    name.textContent = musicArray[songIndex].songName;
    songDuration.classList.add('active');
  });
}

function showMe(){
  let durAudio=audio.duration;
  songDuration.innerHTML = formateTime(durAudio);
}

function formateTime(audioDur){

  let min=Math.floor(audioDur/60);
  let sec=Math.floor(audioDur%60);
  return `${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`;
}

audio.addEventListener('timeupdate',()=>{
  let progress=parseInt((audio.currentTime/audio.duration)*100); 
  progressBar.value=progress;
  currentTime.innerHTML=formateTime(audio.currentTime);
});

progressBar.addEventListener('input',()=>{
  audio.currentTime=(progressBar.value/100) * audio.duration;
});