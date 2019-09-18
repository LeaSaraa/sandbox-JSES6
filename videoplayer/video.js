// const player = document.querySelector('.player');
// const video = player.querySelector('.viewer');
// const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
// const toggle = player.querySelector('.toggle');
// const skipButtons = player.querySelectorAll('[data-skip]');
// const ranges = player.querySelectorAll('.player__slider');
// var duration = document.getElementById('#durationTime');
// var time = document.getElementById('#currentTime');

// function togglePlay() {
//   const playPause = video.paused ? 'play' : 'pause';
//   video[playPause]();
// }

// function updateButton() {
//   const icon = this.paused ? '►' : '❚ ❚';
//   console.log(icon);
//   toggle.textContent = icon;
// }

// function handleRangeUpdate() {
//   video[this.name] = this.value;
// }

// function handleProgress() {
//   const percent = (video.currentTime / video.duration) * 100;
//   progressBar.style.flexBasis = `${percent}%`;
// }

// function scrub(e) {
//   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//   video.currentTime = scrubTime;
// }

// function timeUpdate() {
//   var nt = video.time * (100 / video.duration);
//   var curMins = Math.floor(video.time / 60);
//   var curSecs = Math.floor(video.time - curMins * 60);
//   var durMins = Math.floor(video.duration / 60);
//   var durSecs = Math.round(video.duration - durMins * 60);
//   if(curSecs < 10) {
//     curSecs = "0"+curSecs;
//   }
//   if(durSecs < 10) {
//     durSecs = "0"+durSecs;
//   }
//   if(curMins < 10) {
//     curSecs = "0"+curSecs;
//   }
//   if(durMins < 10) {
//     durSecs = "0"+durSecs;
//   }
//   duration.innerhtml = curMins+":"+curSecs;
//   time.innerhtml = durMins+":"+durSecs;
// };

// video.addEventListener('click', togglePlay);
// video.addEventListener('play', updateButton);
// video.addEventListener('pause', updateButton);
// video.addEventListener('timeupdate', handleProgress);

// toggle.addEventListener('click', togglePlay);
// skipButtons.forEach(button => button.addEventListener('click', skip));

// let mousedown = false;
// progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// progress.addEventListener('mousedown', () => mousedown = true);
// progress.addEventListener('mouseup', () => mousedown = false);

function intializePlayer(){
  video = document.getElementById("my_video");
  playbtn = document.getElementById("playpausebtn");
  seekslider = document.getElementById("seekslider");
  curtimetext = document.getElementById("curtimetext");
  durtimetext = document.getElementById("durtimetext");


function playPause(){
  if(video.paused){
  video.play();
    playbtn.innerHTML = "Pause";
  } else {
    video.pause();
    playbtn.innerHTML = "Play";
  }
}

function vidSeek(){
  var seekto = video.duration * (seekslider.value / 100);
  video.currentTime = seekto;
}

 function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function seektimeupdate(){
  var nt = video.currentTime * (100 / video.duration);
  seekslider.value = nt;
  var curmins = Math.floor(video.currentTime / 60);
  var cursecs = Math.floor(video.currentTime - curmins * 60);
  var durmins = Math.floor(video.duration / 60);
  var dursecs = Math.floor(video.duration - durmins * 60);
  if(cursecs < 10){ cursecs = "0"+cursecs; }
  if(dursecs < 10){ dursecs = "0"+dursecs; }
  if(curmins < 10){ curmins = "0"+curmins; }
  if(durmins < 10){ durmins = "0"+durmins; }
  curtimetext.innerHTML = curmins+":"+cursecs;
  durtimetext.innerHTML = durmins+":"+dursecs;
}

playbtn.addEventListener("click",playPause,false);
  seekslider.addEventListener("change",vidSeek,false);
  video.addEventListener("timeupdate",seektimeupdate,false);
}
window.onload = intializePlayer;
