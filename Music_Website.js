import {musicArray} from './music.js';

const Play=document.querySelector('.Play2');
const backward=document.querySelector('.backward');
const forward=document.querySelector('.forward');
let gifImage=document.querySelector('.gifImage');
let albumCover=document.querySelector('.albumCover');
let pauseBtn=document.querySelector('.pause');

let musicIndex=0;
let audio=new Audio(musicArray[musicIndex].songItem);
let isMusicPlay=false;


backward.addEventListener('click',()=>{
  musicIndex=(musicIndex-1+musicArray.length)%musicArray.length;
  audio.src=musicArray[musicIndex].songItem;
  albumCover.src=musicArray[musicIndex].songAlbum;
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
  }else{
    audio.play();
    albumCover.src=musicArray[musicIndex].songAlbum;
    albumCover.classList.add('aniActive');
    gifImage.classList.add('active');
    Play.classList.add('deactiveBtn');
    pauseBtn.classList.add('activeBtn');
  }
  isMusicPlay=!isMusicPlay;
});

forward.addEventListener('click',()=>{
  musicIndex=(musicIndex+1)%musicArray.length;
  audio.src=musicArray[musicIndex].songItem;
  albumCover.src=musicArray[musicIndex].songAlbum; 
  albumCover.classList.add('aniActive');
  gifImage.classList.add('active');
  Play.classList.add('deactiveBtn');
  pauseBtn.classList.add('activeBtn');
  audio.play();
  isMusicPlay=true;
})