function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function playSound(e) {
    // select the audio with the corresponding key
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  
    // play the audio
    if (!audio) return;
    audio.currentTime = 0; // reset audio when clicking
    audio.play();
  
    // display change in the button
    const key = document.querySelector(`div[data-key="${e.key}"]`);
    key.classList.add('playing');
}

// add transition listener to remove the key display change
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);