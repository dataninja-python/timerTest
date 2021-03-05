window.addEventListener('load', () => {
    // capture the first button property in a variable
    let playBtn = document.getElementById('play');
    let sound = document.getElementById('beep');

    playBtn.onclick = () => {
        sound.play();
        return false;
    }
    // notifyButton.innerHTML = "No, Don't Notify Me";
    // if () {} else if () {} else {}
    
});