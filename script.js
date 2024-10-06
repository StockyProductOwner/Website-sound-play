document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    var audio = document.getElementById('myAudio');
    audio.paused ? audio.play() : audio.pause();
  }
});
