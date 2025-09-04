const musicArray1=[
  {    
    songName:'Aa Seetadevi Navvula',
    songItem:"Music/Music_1.mp3",
    songAlbum:'Music/Music_1.jpg',
  },
  {
    songName:'Sunny',
    songItem:"Music/Music_2.mp3",
    songAlbum:'Music/Music_2.jpg',
  },
  {
    songName:'Empire',
    songItem:"Music/Music_3.mp3",
    songAlbum:'Music/Music_3.jpg',
  },
  {
    songName:'Payal',
    songItem:"Music/Music_4.mp3",
    songAlbum:'Music/Music_4.jpg',
  },
  {
    songName:'Saiyaar(Old Version)',
    songItem:"Music/Music_5.mp3",
    songAlbum:'Music/Music_5.jpg',
  },
  {
    songName:'Suniya Suniya',
    songItem:"Music/Music_6.mp3",
    songAlbum:'Music/Music_6.jpg',
  },
  {
    songName:'Vardan',
    songItem:"Music/Music_7.mp3",
    songAlbum:'Music/Music_7.jpg',
  },
  {
    songName:'Maharani',
    songItem:"Music/Music_8.mp3",
    songAlbum:'Music/Music_8.jpg',
  },
  {
    songName:'Aaj Phir',
    songItem:"Music/Music_9.mp3",
    songAlbum:'Music/Music_9.jpg',
  },
]

for(let i=musicArray1.length-1 ; i > 0 ; i--){
  let j=Math.floor(Math.random() * (i+1));
  [musicArray1[i],musicArray1[j]]=[musicArray1[j],musicArray1[i]];
}

export const musicArray=musicArray1;