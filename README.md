# EmptyRoom
A VR interactive art experience.

This project was created during LVHack 2016.

This project uses three.js and Google Cardboard.

## Getting Started

To get started, the entire source code should be placed as is in a web-accessible location. For testing purposes, the easiest method would be to place the files as is in the www root of a web server on the lan. Any web server should work. We developed this project using [WAMPServer](http://www.wampserver.com). 

Then, simply access the website via the web browser on the device to be used for Google Cardboard, and select one of the available worlds to load it. It may take a moment for the browser to fully load all of the resources.

## How it works

###### Initialization
When a world’s html file loads, the JavaScript first creates a new world object from the function Universe, which is stored in a separate .js file, and stores world specific information such as camera position, looking multiplier, lighting, as well as an array specifying all of the walls in the rendered world, their name, position, number of frames, frame delay, etc. The script then initializes the renderer and sets up the scene, controls, and default camera position as specified in the Universe function. Then, each frame of the wall animations, as specified in the wall array is loaded as a texture, and stored in a separate texture array. Each wall object is then given its initial texture, and added to the scene. Control for each wall is then passed via a timeout to the function animateWall.

###### Animation
The function animateWall receives the world object, the index of the wall it is controlling, and the current frame to be shown. The function then sets the wall’s texture to the appropriate frame’s texture stored in the textures array. Then, the function determines the current camera direction and whether or not the user is looking at the wall, updating the frame count based on how the wall should react when looked at. Lastly, the function calls itself via a timeout set for the frame delay of the animation.
