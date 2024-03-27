const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700
let gameSpeed = 1
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
let x = 0
let x2 = x + 2400
function animate() {
    // if (x == -2400) {
    //     x = 2400
    // }
    // if (x2 == -2400) {
    //     x2 = 2400
    // }



    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.drawImage(backgroundLayer4, x, 0)
    ctx.drawImage(backgroundLayer4, x2, 0)
    console.log(x, x2)
    if (x > -2400) {
        x -= gameSpeed
    }

    else {
        debugger
        // x2 = -1
        x = 2399
        // x = x2 + 2399
    }

    if (x2 > -2400) { x2 -= gameSpeed }
    else {
        debugger
        // x = -1
        x2 = 2399
        // x2 = x + 2399
    }

    if (x == 0) { console.log(x, x2) }
    // let x = 0
    // let x2 = 2401
    // function animate() {
    //     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    //     ctx.drawImage(backgroundLayer4, x, 0)
    //     ctx.drawImage(backgroundLayer4, x2, 0)
    //     if (x > -4000) { x -= gameSpeed }
    //     else {
    //         console.log(x, x2 + 2400)
    //         x = 801
    //     }
    //     if (x2 > -1599) { x2 -= gameSpeed }
    //     else x2 = 2401
    //     if (x == -2400) { console.log(x, x2) }
    requestAnimationFrame(animate)
    // console.log(x, x2)

}
animate()