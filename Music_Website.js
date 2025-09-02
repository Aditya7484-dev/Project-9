import {musicArray} from './music.js';

const Play=document.querySelector('.Play2');
const backward=document.querySelector('.backward');
const forward=document.querySelector('.forward');
let musicIndex=0;
let audio=new Audio(musicArray[musicIndex]);
let isMusicPlay=false;

Play.addEventListener('click',()=>{
  if(isMusicPlay){
    audio.pause();
  }else{
    audio.play();
  }
  isMusicPlay=!isMusicPlay;
});

backward.addEventListener('click',()=>{
  musicIndex=(musicIndex-1+musicArray.length)%musicArray.length;
  audio.src=musicArray[musicIndex];
  audio.play();
  isMusicPlay=true;
});

forward.addEventListener('click',()=>{
  musicIndex=(musicIndex+1)%musicArray.length; 
  audio.src=musicArray[musicIndex];
  audio.play();
  isMusicPlay=true;
})