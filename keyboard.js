const searchbox = document.getElementById("searchbox");
const keyboard = document.getElementById("keyboard");
const keySound = document.getElementById("keySound");

keyboard.addEventListener('click', (event) => 
  {if (event.target.classList.contains('key')) {
    let keyText = event.target.textContent;

    if (keyText === 'Space') {
      keyText = " ";
      searchbox.value += keyText;
    } else if (keyText === 'Backspace') {
      searchbox.value = searchbox.value.slice(0, -1);
    } else {
      searchbox.value += keyText;
    }

    keySound.currentTime = 0; // Reset sound to the start
    keySound.play();
  }
});

searchbox.addEventListener("input", () => {
  console.log("Search data:", searchbox.value);
});
