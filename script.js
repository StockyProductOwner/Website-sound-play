document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    var audio = document.getElementById('myAudio');
    if (audio.paused) {
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
      }); 
    } else {
      audio.pause();
    }
  }
});
