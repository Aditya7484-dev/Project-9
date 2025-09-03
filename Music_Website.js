import {musicArray} from './music.js';

const Play=document.querySelector('.Play2');
const backward=document.querySelector('.backward');
const forward=document.querySelector('.forward');

let gifImage=document.querySelector('.gifImage');
let albumCover=document.querySelector('.albumCover');
let pauseBtn=document.querySelector('.pause');
let musicName=document.querySelector('.musicName');
let musicName2=document.querySelector('.musicName2');
let progressBar=document.getElementById('myProgressBar');

let musicIndex=0;
let audio=new Audio(musicArray[musicIndex].songItem);
let isMusicPlay=false;


backward.addEventListener('click',()=>{
  musicIndex=(musicIndex-1+musicArray.length)%musicArray.length;
  audio.src=musicArray[musicIndex].songItem;
  albumCover.src=musicArray[musicIndex].songAlbum;
  musicName.innerHTML=musicArray[musicIndex].songName;
  musicName2.innerHTML=musicArray[musicIndex].songName;
  albumCover.classList.add('aniActive');
  gifImage.classList.add('active');
  Play.classList.add('deactiveBtn');
  pauseBtn.classList.add('activeBtn');
  audio.play();
  isMusicPlay=true;
});

Play.addEventListener('click',()=>{
  if(isMusicPlay){
    audio.pause();
    albumCover.src=musicArray[musicIndex].songAlbum;
    albumCover.classList.remove('aniActive');
    gifImage.classList.remove('active');
    Play.classList.remove('deactiveBtn');
    pauseBtn.classList.remove('activeBtn');
    musicName.Text=musicArray[musicIndex].songName;
    musicName2.Text=musicArray[musicIndex].songName;
  }else{
    audio.play();
    albumCover.src=musicArray[musicIndex].songAlbum;
    albumCover.classList.add('aniActive');
    gifImage.classList.add('active');
    Play.classList.add('deactiveBtn');
    pauseBtn.classList.add('activeBtn');
    musicName.innerText=musicArray[musicIndex].songName;
    musicName2.innerText=musicArray[musicIndex].songName;
  }
  isMusicPlay=!isMusicPlay;
});

forward.addEventListener('click',()=>{
  musicIndex=(musicIndex+1)%musicArray.length;
  audio.src=musicArray[musicIndex].songItem;
  albumCover.src=musicArray[musicIndex].songAlbum; 
  musicName.innerText=musicArray[musicIndex].songName;
  musicName2.innerText=musicArray[musicIndex].songName;
  albumCover.classList.add('aniActive');
  gifImage.classList.add('active');
  Play.classList.add('deactiveBtn');
  pauseBtn.classList.add('activeBtn');
  audio.play();
  isMusicPlay=true;
});

audio.addEventListener('timeupdate',()=>{
  let progress=parseInt((audio.currentTime/audio.duration)*100); 
  progressBar.value=progress;
})