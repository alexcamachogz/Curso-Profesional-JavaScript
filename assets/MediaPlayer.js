const button = document.querySelector("#play");
const buttonMute = document.querySelector("#mute");

function MediaPlayer(config) {
	this.media = config.media;
	this.plugins = config.plugins || [];

	this._initPlugins();
}

MediaPlayer.prototype.play = function() {
	if (this.media.paused === true) {
		this.media.play();
		button.innerHTML = '<i class="fas fa-pause"></i>';
	} else {
		this.media.pause();
		button.innerHTML = '<i class="fas fa-play"></i>';
	}
}

MediaPlayer.prototype.mute = function() {
	this.media.muted = !this.media.muted;
	if (this.media.muted === true) {
		buttonMute.innerHTML = '<i class="fas fa-volume-mute"></i>'
	} else {
		buttonMute.innerHTML = '<i class="fas fa-volume-up"></i>';
	}
}

// MediaPlayer.prototype.unmute = function() {
// 	this.media.muted = false;
// 	buttonMute.innerHTML = '<i class="fas fa-volume-mute"></i>'
// }

MediaPlayer.prototype._initPlugins = function() {
	this.plugins.forEach(plugin => {
		plugin.run(this);
	});
}

export default MediaPlayer