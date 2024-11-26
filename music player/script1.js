
  // <div class="container">
  //   <div class="playlistContainer"></div>
  //   <audio src="" class="audioPlayer">
  //     Your browser do not support.
  //   </audio>
  //   <div class="currentAndTotalTime">00:00/00:00</div>
  //   <div id="progressBar">
  //     <div id="currentProgress" ></div>
  //   </div>
  //   <div class="musicPlayer">
  //     <i class="fas fa-step-backward controls previousButton"></i>
  //     <i class="fas fa-play-circle controls playButton"></i>
  //     <i class="far fa-pause-circle controls pauseButton"></i>
  //     <i class="fas fa-step-forward controls nextButton"></i>
  //   </div> 
  // </div>

const js_playlistContainer = document.querySelector(".playlistContainer");
const js_audioTag = document.querySelector('.audioPlayer');
const js_currentAndTotalTime = document.querySelector('.currentAndTotalTime');
const js_currentProgress = document.querySelector('#currentProgress');
// const currentProgressTag = document.getElementById('currentProgress');
const js_playBtn = document.querySelector('.playButton');
const js_pauseBtn = document.querySelector('.pauseButton');
const js_preBtn = document.querySelector('.previousButton');
const js_nextBtn = document.querySelector('.nextButton');


const playlist = [
  { musicId: "music/track1.mp3", title: "December Nya - Lin Nat" },
  { musicId: "music/track2.mp3", title: "Tsaw Ra Ai Tsaw Hkrup Sai - Ann Naw" },
  { musicId: "music/track3.mp3", title: "Lann Mha Gyee Yey Bey - Wine Suu Khine Thein"},
  { musicId: "music/track4.mp3", title: "Yee Zarr Sar - Sai Sai Kham Hlaing " },
  
];


for (let i = 0; i < playlist.length; i++){
  const musicItem = document.createElement('div');
  musicItem.classList.add('trackItem');
    
  const numPlusTitle = (i + 1).toString() + '. ' + playlist[i].title;
  musicItem.textContent = numPlusTitle;
  js_playlistContainer.append(musicItem);
  
  musicItem.addEventListener('click', () => {
    currentPlayingIndex = i;
    audioPlayFunc();
    capacityFunc();
  });
  
  
}

let durationText = "00:00";
let duration = 0;
js_audioTag.addEventListener('loadeddata', () => {
  duration = Math.floor(js_audioTag.duration);
  durationText = minSecFunc(duration);

})

js_audioTag.addEventListener('timeupdate', () => {
  const currentTime = Math.floor(js_audioTag.currentTime);
  const currentTimeText = minSecFunc(currentTime);
  const currentandtotalTimeText = currentTimeText + '/' + durationText;
  js_currentAndTotalTime.textContent = currentandtotalTimeText;

  runningProgressFunc(currentTime); 

});

const runningProgressFunc = (currentTime) => {
  const currentPwidth = (currentTime / duration) * 500;
  js_currentProgress.style.width = currentPwidth.toString() + "px";
  // (or) js_currentProgress.style.width = currentPwidth + "px";
}



function minSecFunc(xPara) {
  const minute = Math.floor(xPara / 60);
  const second = xPara % 60;

  const minText = minute < 10 ? '0' + minute.toString() : minute;
  const secText = second < 10 ? '0' + second.toString() : second;

  return minText + ':' + secText;

}


let currentPlayingIndex = 0;
let isPlaying = false;
js_playBtn.addEventListener('click', () => {
  audioPlayFunc();
})

js_pauseBtn.addEventListener('click', () => {
  js_audioTag.pause();
  isPlaying = false;
  playPauseFunc();
  capacityFunc();
});

const playPauseFunc = () => {
  if (isPlaying) {
    js_playBtn.style.display = 'none';
    js_pauseBtn.style.display = 'inline';
  } else {
    js_pauseBtn.style.display = 'none';
    js_playBtn.style.display = 'inline';
  }
};


js_preBtn.addEventListener('click', () => {
  if (currentPlayingIndex === 0) {
    js_preBtn.style.opacity = 0.5;
    return;
  } else {
    js_nextBtn.style.opacity = 1;
    currentPlayingIndex -= 1;
    audioPlayFunc();
    capacityFunc();

  }
});

js_nextBtn.addEventListener('click', () => {
  if (currentPlayingIndex === playlist.length - 1) {
    // js_nextBtn.style.opacity = 0.5;
    return;
  } else {
    // js_preBtn.style.opacity = 1;      
    currentPlayingIndex += 1;
    audioPlayFunc();
    capacityFunc();

  }
});

const audioPlayFunc = () => {
  const songIdToPlay = playlist[currentPlayingIndex].musicId;
    js_audioTag.src = songIdToPlay;
    js_audioTag.play();
    isPlaying = true;
    playPauseFunc();
    capacityFunc();
}

const capacityFunc = () => {
  if (currentPlayingIndex === 0 & 1) {
    js_preBtn.style.opacity = 0.5;    
  }else if(currentPlayingIndex === playlist.length-1) {
    js_nextBtn.style.opacity = 0.5;    
  } else {    
    js_preBtn.style.opacity = 1;
    js_nextBtn.style.opacity = 1;
  }
}

// JOB DONE!!!


// for (let i = 0; i < playlist.length; i++){  
  
//   const musicDiv = document.createElement('div');
//   musicDiv.classList.add('trackItem'); // to add CSS style
  
//   musicDiv.addEventListener('click', () => {  // function to play music on click
//     const songId = playlist[i].musicId;
//     js_audioTag.src = songId;
//     js_audioTag.play();
//   });
//   const numPlusTitle = (i + 1).toString() + '. ' + playlist[i].title;   //this code to Pl number infornt of songs(optionals)
//   musicDiv.textContent = numPlusTitle; //playlistDiv.textContent = playlist[i].title; (this code can used for without adding number infront of songs)
//   // textContent can be plain text or list array
//   js_playlistContainer.append(musicDiv);
// };



// let totalTimeText = '00:00';
// let totalTime = 0;
// audioTag.addEventListener("loadeddata", () => {
//   totalTime = Math.floor(audioTag.duration);
//   totalTimeText = minSecFunc(totalTime);
  
// });

// audioTag.addEventListener('timeupdate', () => {
//   const playTime = Math.floor(audioTag.currentTime);
//   const playTimeText = minSecFunc(playTime);
//   const totalAndPlayTime = playTimeText + ' / ' + totalTimeText;
//   currentAndTotalTimeTag.textContent = totalAndPlayTime;
//   updateProgressBar(playTime);

// });

// const updateProgressBar = (playTime) => {
//   const progressWidth = (500 / totalTime) * playTime;
//   currentProgressTag.style.width = progressWidth.toString() + 'px';
// };


// let playIndex = 0;
// let isPlaying = false;
// playButtonTag.addEventListener('click', () => {
//   const songIdToPlay = tracks[playIndex].trackId;
//   audioTag.src = songIdToPlay;
//   audioTag.play();
//   isPlaying = true;
//   playPauseFunc();

// });

// const playPauseFunc = () => {
//   if (isPlaying) {
//     playButtonTag.style.display = 'none';
//     pauseButtonTag.style.display = 'inline';
//   } else {
//     playButtonTag.style.display = 'inline';
//     pauseButtonTag.style.display = 'none';   
//   }
// }

// const minSecFunc = (x) => {
//   const minute = Math.floor(x / 60);
//   const second = x % 60;
  
//   const minText = minute < 10 ? '0' + minute.toString() : minute;
//   const secText = second < 10 ? '0' + second.toString() : second;
  
//   return minText + ':' + secText;
  
// }



//----------------------------------------------------------




// for (let i = 1; i < tracks.length; i++){                      //if i=1 , tracks[i].title will be start from index number one instead of zero.
//   const trackTag = document.createElement('div');
//   trackTag.classList.add('trackItem');
//   const trackList = i.toString() + '. ' + tracks[i].title;   //this code to add number infornt of songs(optionals)
//   trackTag.textContent = trackList; //trackTag.textContent = tracks[i].title; (this code can used for without adding number infront of songs)
//   // textContent can be plain text or list array
//   playlistContainerTag.append(trackTag);
// };


// BELOW CODE WITHOUT SEPARATE "DIV" CREATED SO IT IS DIFFICULT TO ADD "EVENTLISTENER" FUNCTION IN JS FOR INDIVIDUAL.
// for (let i = 0; i < tracks.length; i++ ) {
//   const trackTag = (i + 1).toString() + "." + tracks[i].title;
//   playlistContainerTag.append(trackTag);
// }










// const playlistContainerTag = document.getElementsByClassName("playlistContainer")[0];

// const audioTag = document.getElementsByClassName("audioTag")[0];

// const tracks = [
//   { trackId: "music/track1.mp3", title: "December Nya - Lin Nat" },
//   { trackId: "music/track2.mp3", title: "Tsaw Ra Ai Tsaw Hkrup Sai - Ann Naw" },
//   { trackId: "music/track3.mp3", title: "Lann Mha Gyee Yey Bey - Wine Suu Khine Thein"},
//   { trackId: "music/track4.mp3", title: "Yee Zarr Sar - Sai Sai Kham Hlaing "},
// ];

// for (let i = 0; i < tracks.length; i++) {
//   const trackTag = document.createElement("div");
//   trackTag.addEventListener("click", () => {
//     const trackId = tracks[i].trackId;
//     audioTag.src = trackId;
//     audioTag.play();
//   });
//   trackTag.classList.add("trackItem");
//   const title = (i + 1).toString() + ". " + tracks[i].title;
//   trackTag.textContent = title;
//   playlistContainerTag.append(trackTag);
// }
