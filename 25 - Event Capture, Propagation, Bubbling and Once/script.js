const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stop bubbling
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  /**
   * if capture is true,
   *  capture and fire the event at the same time
   *  which mean the events are fired from outside to inside
   * else,
   *  capture first, then fire from inside to outside
   */
  once: true
  /**
   * make event only fires off once for this element
   */
}));