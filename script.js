// const canvas = document.getElementById("canvas1");
// const ctx = canvas.getContext("2d");
// // console.log(ctx);
// const CANVAS_WIDTH = canvas.width = 600;
// const CANVAS_HEIGHT = canvas.height = 600;

// const playerImage = new Image();
// playerImage.src = 'shadow_dog.png';

// function animate() {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
//     ctx.fillRect(100, 50, 100, 100);
//     requestAnimationFrame(animate);
// };
// animate();





const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext("2d")
// ctx.fillStyle = "green";
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillRect(100, 100, 20, 25)

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = "shadow_dog.png"
const spriteWidth = 575
const spriteHeight = 523
let frameX = 2;
let frameY = 0
let gameFrame = 0
const staggerFrames = 10
const spriteAnimations = []
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    }
]
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = spriteWidth * j
        let positionY = spriteHeight * index
        frames.loc.push({ x: positionX, y: positionY })
    }
    spriteAnimations[state.name] = frames
})
console.log(spriteAnimations)
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // ctx.fillRect(100, 50, 100, 100)
    // ctx.drawImage(image, sx.sy, sw, sh, dx, dy, dw, dh)
    let position = Math.floor(gameFrame / staggerFrames) % 6
    frameX = spriteWidth * position
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    if (gameFrame % staggerFrames == 0)
        if (frameX < 6) frameX++
        else frameX = 0
    gameFrame++
    requestAnimationFrame(animate)
}
animate()