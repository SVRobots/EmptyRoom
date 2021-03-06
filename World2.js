function Universe (a) {
	this.lookConeMult = 0.5;
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
			color: 0xADDFFF,
			brightness: 0.0
		}
	};
	this.wall = [
		{
			name: "sun",
			xOffset: 100,
			yOffset: 0,
			zOffset: 0,
			xWidth: 0.2,
			yWidth: 200,
			zWidth: 200,
			delay: 30,
			frameCount: 210,
			reverseFrames: false,
			playState: "LOOKING"
		},
		{
			name: "chick",
			xOffset: 0,
			yOffset: 100,
			zOffset: 0,
			xWidth: 200,
			yWidth: 0.2,
			zWidth: 200,
			delay: 30,
			frameCount: 60,
			reverseFrames: false,
			playState: "LOOKING"
		},
		{
			name: "worm",
			xOffset: -100,
			yOffset: 0,
			zOffset: 0,
			xWidth: 0.2,
			yWidth: 200,
			zWidth: 200,
			delay: 30,
			frameCount: 210,
			reverseFrames: false,
			playState: "LOOKING"
		},
		{
			name: "pot",
			xOffset: 0,
			yOffset: -100,
			zOffset: 0,
			xWidth: 200,
			yWidth: 0.2,
			zWidth: 200,
			delay: 30,
			frameCount: 90,
			reverseFrames: false,
			playState: "LOOKING"
		},
		{
			name: "tun",
			xOffset: 0,
			yOffset: 0,
			zOffset: -100,
			xWidth: 200,
			yWidth: 200,
			zWidth: 0.2,
			delay: 30,
			frameCount: 14,
			reverseFrames: false,
			playState: "ALWAYS"
		},
		{
			name: "tun",
			xOffset: 0,
			yOffset: 0,
			zOffset: 100,
			xWidth: 200,
			yWidth: 200,
			zWidth: 0.2,
			delay: 30,
			frameCount: 14,
			reverseFrames: true,
			playState: "ALWAYS"
		}
	];
	this.textures = new Array();
	this.walls = new Array();
}