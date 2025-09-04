import {musicArray} from './music.js';

let playBtn=document.querySelector('.Play2');
let backwardBtn=document.querySelector('.backward');
let forwardBtn=document.querySelector('.forward');
let pauseBtn=document.querySelector('.pause');

let musicIndex=0;
const audio=new Audio(musicArray[musicIndex].songItem);
let isMusicPlaying=false;

playBtn.addEventListener('click',()=>{
  if(isMusicPlaying){
    audio.pause();
    playBtn.classList.remove('deactiveBtn');
    pauseBtn.classList.remove('activeBtn');
  }else{
    audio.play();
    playBtn.classList.add('deactiveBtn');
    pauseBtn.classList.add('activeBtn');
  }
  isMusicPlaying=!isMusicPlaying;
})


backwardBtn.addEventListener('click',()=>{
   
});

// forwardBtn.addEventListener('click',()=>{
//   console.log("Clicked");
// });
