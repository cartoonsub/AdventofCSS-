
document.addEventListener('DOMContentLoaded', () => {
    whiteKeys = document.querySelectorAll('.keys');
    for (let i = 0; i < whiteKeys.length; i++) {
        whiteKeys[i].addEventListener('click', () => {
            let dataNote = whiteKeys[i].getAttribute('data-note');
            let audioFile = 'sounds/' + String(dataNote) + '.mp3';
            console.log(audioFile);
            var audio = new Audio(audioFile);
            audio.play();
        });
    }
});

