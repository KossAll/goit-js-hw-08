
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

player.on('timeupdate', throttle((evt) => setLocStor(evt), 1000));
function setLocStor(evt) {
   localStorage.setItem("videoplayer-current-time", JSON.stringify(evt));    
    }

const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"))?.seconds ?? 0;
player.setCurrentTime(currentTime)