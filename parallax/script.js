const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700
let gameSpeed = 2
const backgroundLayer1 = new Image()
backgroundLayer1.src = 'layer-1.png'
const backgroundLayer2 = new Image()
backgroundLayer2.src = 'layer-2.png'
const backgroundLayer3 = new Image()
backgroundLayer3.src = 'layer-3.png'
const backgroundLayer4 = new Image()
backgroundLayer4.src = 'layer-4.png'
const backgroundLayer5 = new Image()
backgroundLayer5.src = 'layer-5.png'
const slider = document.getElementById('slider');
slider.value = gameSpeed
const showGameSpeed = document.getElementById('showGameSpeed')
showGameSpeed.innerHTML = gameSpeed
slider.addEventListener('change', (e) => {
    console.log(e.target.value)
    gameSpeed = e.target.value
    showGameSpeed.innerHTML = gameSpeed
})

class Layer {
    constructor(image, speedModifier) {
        this.x = 0
        this.y = 0
        this.width = 2400
        this.height = 700
        this.x2 = this.width
        this.image = image
        this.speedModifier = speedModifier
        this.speed = gameSpeed * this.speedModifier
    }
    update() {
        this.speed = gameSpeed * this.speedModifier
        if (this.x < -this.width) {
            this.x = this.width + this.x2 - this.speed
        }
        if (this.x2 < -this.width) {
            this.x2 = this.width + this.x - this.speed
        }
        this.x = Math.floor(this.x - this.speed)
        this.x2 = Math.floor(this.x2 - this.speed)

    }
    update() {
        this.speed = gameSpeed * this.speedModifier
        if (this.x < -this.width) {
            this.x = 0
            // this.x = this.width + 2400 - this.speed
        }
        // if (this.x + 2400 < -this.width) {
        //     this.x + 2400 = this.width + this.x - this.speed
        // }
        this.x = Math.floor(this.x - this.speed)
        this.x2 = Math.floor(this.x2 - this.speed)

    }
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)


    }
}
const layer1 = new Layer(backgroundLayer1, 0.2)
const layer2 = new Layer(backgroundLayer2, 0.4)
const layer3 = new Layer(backgroundLayer3, 0.6)
const layer4 = new Layer(backgroundLayer4, 0.8)
const layer5 = new Layer(backgroundLayer5, 1)

const gameObjects = [layer1, layer2, layer3, layer4, layer5];
/* let x = 0
let x2 = x + 2400 */
function animate2() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.drawImage(backgroundLayer4, x, 0)
    ctx.drawImage(backgroundLayer4, x2, 0)

    console.log(x, x2)
    if (x > -2400) {
        x -= gameSpeed
    }

    else {
        debugger
        x = 2399 - gameSpeed + 1
    }

    if (x2 > -2400 + gameSpeed - 1) { x2 -= gameSpeed }
    else {
        debugger
        x2 = 2399 - gameSpeed + 1
    }

    if (x == 0) { console.log(x, x2) }
    requestAnimationFrame(animate)

}
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    gameObjects.forEach(object => {
        object.update()
        object.draw()
    })
    layer4.update()
    layer4.draw()
    layer5.update()
    layer5.draw()
    requestAnimationFrame(animate)
}
animate()