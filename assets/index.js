import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const buttonPlay = document.querySelector("#play");
const buttonMute = document.querySelector("#mute");

const player = new MediaPlayer({ 
	media: video,
	plugins: [new AutoPlay()],
});

buttonPlay.onclick = () => player.play();
buttonMute.onclick = () => player.mute();
