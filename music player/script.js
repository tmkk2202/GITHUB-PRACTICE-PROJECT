
const js_playlistContainer = document.querySelector('.playlistContainer');
const js_audio = document.querySelector('.audioPlayer');
const js_currentAndTotalTime = document.querySelector('.currentAndTotalTime');
const js_currentProgressId = document.querySelector('#currentProgress');
const js_prevBtn = document.querySelector('.previousButton');
const js_playBtn = document.querySelector('.playButton');
const js_pauseBtn = document.querySelector('.pauseButton');
const js_nextBtn = document.querySelector('.nextButton');




const playlist = [
  { musicId: "music/track1.mp3", title: "December Nya - Lin Nit" },
  { musicId: "music/track2.mp3", title: "Tsaw Ra Ai Tsaw Hkrup Sai - Ann Naw" },
  { musicId: "music/track3.mp3", title: "Lann Mha Gyee Yey Bey - Wine Suu Khine Thein"},
  { musicId: "music/track4.mp3", title: "Yee Zarr Sar - Sai Sai Kham Hlaing " },
  
];

for (let i = 0; i < playlist.length; i++){
    const divTag = document.createElement('div');
    const title = playlist[i].title;
    const numTitle = (i + 1) +'. '+ title;
    divTag.textContent = numTitle; 
    divTag.classList.add('trackItem');
    js_playlistContainer.append(divTag);

    divTag.addEventListener('click', () => {
      isplay = true;
      audioPlayFunc(currentPlayIndex);
      currentPlayIndex = i;
      prevNextOnOffFunc(i)
    })
  } 
  
  let durationText = '00:00';
  let songDuration = 0;
  js_audio.addEventListener('loadeddata', () => {
    songDuration = Math.floor(js_audio.duration);
    durationText = timeFunc(songDuration);
    
  })
  
js_audio.addEventListener('timeupdate', () => {
  const songcurrenttime = Math.floor(js_audio.currentTime);
  const currenTimeText = timeFunc(songcurrenttime);
  const currentTimeAndDurationText = currenTimeText + ' / ' + durationText;
  js_currentAndTotalTime.textContent = currentTimeAndDurationText;
  updateBar(songcurrenttime);
})


const timeFunc = (x) => {
  const minute = Math.floor(x / 60);
  const second = x % 60;
  
  const minText = minute < 10 ? '0' + minute.toString() : minute;
  const secText = second < 10 ? '0' + second.toString() : second;
  
  return minText + ':' + secText;
  
}

const updateBar = (x) => {
  const pBarWidth = (x / songDuration) * 500;
  js_currentProgressId.style.width = pBarWidth.toString() + 'px';
  
}

let currentPlayIndex = 0;
let isplay = false;
js_playBtn.addEventListener('click', () => {
  const currentTime = Math.floor(js_audio.currentTime);
  isplay = true;
  if (currentTime === 0) {
    audioPlayFunc(currentPlayIndex);
  } else {
    js_audio.play();
    playPauseFunc();
  }
});

js_pauseBtn.addEventListener('click', () => {
  isplay = false;
  js_audio.pause();
  playPauseFunc();
})

js_nextBtn.addEventListener('click', () => {
  isplay = true;
  if (currentPlayIndex === playlist.length - 1) {
    return;
  }
  currentPlayIndex += 1;
  audioPlayFunc(currentPlayIndex);
  prevNextOnOffFunc(currentPlayIndex);  
});

js_prevBtn.addEventListener('click', () => {
  isplay = true;
  if (currentPlayIndex === 0) {
    return;
  }
  currentPlayIndex -= 1;
  audioPlayFunc(currentPlayIndex);
  prevNextOnOffFunc(currentPlayIndex);
});


const playPauseFunc = () => {
  if (isplay) {
    js_playBtn.style.display = 'none';
    js_pauseBtn.style.display = "inline";
  } else {
    js_playBtn.style.display = 'inline';
    js_pauseBtn.style.display = "none";
  }
}

const audioPlayFunc = (currentPlayIndex) => {
  const getSong = playlist[currentPlayIndex].musicId;
  js_audio.src = getSong;
  js_audio.play();
  playPauseFunc();
}

const prevNextOnOffFunc = (xx) => {
  if (xx === 0) {
    js_prevBtn.style.opacity = 0.5;
    js_nextBtn.style.opacity = 1;
  } else if (xx === playlist.length - 1) {
    js_nextBtn.style.opacity = 0.5;
    js_prevBtn.style.opacity = 1;
  } else {
    js_prevBtn.style.opacity = 1;
    js_nextBtn.style.opacity=1;
  }
}


//WELL DONE