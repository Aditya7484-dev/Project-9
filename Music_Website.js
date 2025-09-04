import {musicArray} from './music.js';

let musicIndex=0;
let audio=new Audio(musicArray[musicIndex].songItem);

const Play=document.querySelector('.Play2');
const backward=document.querySelector('.backward');
const forward=document.querySelector('.forward');

let gifImage=document.querySelector('.gifImage');
let albumCover=document.querySelector('.albumCover');
let pauseBtn=document.querySelector('.pause');
let musicName=document.querySelector('.musicName');
let musicName2=document.querySelector('.musicName2');
let progressBar=document.getElementById('myProgressBar');
let timeIndex=document.querySelector('.timing');

let isMusicPlay=false;

function showTime(){
  audio.addEventListener('loadedmetadata',()=>{
    ShowTiming(audio.duration);
  });
}

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
  showTime();
  showMe();
});

Play.addEventListener('click',()=>{
  if(isMusicPlay){
    audio.pause();
    albumCover.src=musicArray[musicIndex].songAlbum;
    albumCover.classList.remove('aniActive');
    gifImage.classList.remove('active');
    Play.classList.remove('deactiveBtn');
    pauseBtn.classList.remove('activeBtn');
    musicName.innerHTML=musicArray[musicIndex].songName;
    musicName2.innerHTML=musicArray[musicIndex].songName;
  }else{
    audio.play();
    albumCover.src=musicArray[musicIndex].songAlbum;
    albumCover.classList.add('aniActive');
    gifImage.classList.add('active');
    Play.classList.add('deactiveBtn');
    pauseBtn.classList.add('activeBtn');
    musicName.innerText=musicArray[musicIndex].songName;
    musicName2.innerText=musicArray[musicIndex].songName;
    isMusicPlay=true;
    showTime();
    showMe();
  }
  isMusicPlay=!isMusicPlay;
});

function showMe(){
  let durAudio=audio.duration;
  ShowTiming(durAudio);
}

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
  showTime();
  showMe();
});

audio.addEventListener('timeupdate',()=>{
  let progress=parseInt((audio.currentTime/audio.duration)*100); 
  progressBar.value=progress;
});

progressBar.addEventListener('input',()=>{
  audio.currentTime = (progressBar.value/100) * audio.duration;
});

function ShowTiming(audioDur){
  let min=Math.floor(audioDur/60);
  let sec=Math.floor(audioDur%60);
  console.log(min);
  if(min<10){
    if(sec<10){
      timeIndex.textContent=`0${min}:0${sec}`;
    }else{
      timeIndex.textContent=`0${min}:${sec}`;
    }
  }else{
    timeIndex.textContent=`${min}:${sec}`;
  }
}  