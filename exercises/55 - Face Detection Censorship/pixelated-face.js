// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.
const video = document.querySelector(".webcam");
const canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d");
const faceCanvas = document.querySelector(".face");
const faceCtx = faceCanvas.getContext("2d");
const faceDetector = new window.FaceDetector({ fastMode: true });
const SIZE = 10;
const SCALE = 1;

// Write a function that will populate the users video
async function populateVideo() {
	const stream = await navigator.mediaDevices.getUserMedia({
		video: { width: 1280, height: 720 },
	});
	video.srcObject = stream;
	await video.play();
	// size the canvas to be the same size as the video
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	faceCanvas.width = video.videoWidth;
	faceCanvas.height = video.videoHeight;
}

async function detect() {
	const faces = await faceDetector.detect(video);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// ask the browser when the next animation frame is, and tell it to run detect for us
	faces.forEach(drawFace);
	faces.forEach(censor);
	requestAnimationFrame(detect);
}

function drawFace(face) {
	const { width, height, top, left } = face.boundingBox;
	ctx.strokeStyle = "#ffc600";
	ctx.lineWidth = 1;
	ctx.strokeRect(left, top, width, height);
	ctx.stroke();
}

function censor({ boundingBox: face }) {
	faceCtx.imageSmoothingEnabled = false;
	faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
	// draw the small face
	faceCtx.drawImage(
		// 5 source args
		video, // where does the source come from?
		face.x, // where do we start the source pull from?
		face.y,
		face.width,
		face.height,
		// 4 draw args
		face.x, // where should we start drawing the x and y?
		face.y,
		SIZE,
		SIZE
	);
	// take that face back out and draw it back at normal size

	const width = face.width * SCALE;
	const height = face.height * SCALE;
	faceCtx.drawImage(
		faceCanvas, // source
		face.x, // where do we start the source pull from?
		face.y,
		SIZE,
		SIZE,
		// Drawing args
		face.x - (width - face.width) / 2,
		face.y - (height - face.height) / 2,
		width,
		height
	);
}

populateVideo().then(detect);
