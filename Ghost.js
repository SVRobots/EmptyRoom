function Universe (a) {
	this.lookConeMult = 0.6;
	this.camera = {
		x: 0,
		y: 10,
		z: 0,
		radiansUp: (0 * Math.PI / Math.PI),
		radiansRight: (0 * Math.PI / Math.PI)
	};
	this.light = {
		ambient: 0xF0F0F0,
		hemisphere: {
			color: 0xDD0000,
			brightness: 0.9
		}
	};
	this.wall = [
		{
			name: "ghost1",
			xOffset: 200,
			yOffset: 0,
			zOffset: 0,
			xWidth: 0.2,
			yWidth: 100,
			zWidth: 100,
			delay: 10,
			frameCount: 2,
			reverseFrames: false,
			playState: "NEVER",
			lookFrame: 0,
			lookAwayFrame: 1
		},
		{
			name: "ghost1",
			xOffset: 0,
			yOffset: 200,
			zOffset: 0,
			xWidth: 100,
			yWidth: 0.2,
			zWidth: 100,
			delay: 10,
			frameCount: 2,
			reverseFrames: false,
			playState: "NEVER",
			lookFrame: 0,
			lookAwayFrame: 1
		},
		{
			name: "ghost1",
			xOffset: -200,
			yOffset: 0,
			zOffset: 0,
			xWidth: 0.2,
			yWidth: 100,
			zWidth: 100,
			delay: 10,
			frameCount: 2,
			reverseFrames: false,
			playState: "NEVER",
			lookFrame: 0,
			lookAwayFrame: 1
		},
		{
			name: "ghost1",
			xOffset: 0,
			yOffset: -200,
			zOffset: 0,
			xWidth: 100,
			yWidth: 0.2,
			zWidth: 100,
			delay: 10,
			frameCount: 2,
			reverseFrames: false,
			playState: "NEVER",
			lookFrame: 0,
			lookAwayFrame: 1
		}
	];
	this.textures = new Array();
	this.walls = new Array();
	this.scenes = new Array();
}