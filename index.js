const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player{
    constructor(){
        this.position = {
            x:100,
            y:100
        }
        this.velocity = {
            x:0,
            y:1
        }
        this.width = 30
        this.height = 30
    }

    draw(){
        c.fillStyle = 'black'
        c.fillRect(this.position.x,this.position.y,this.height,this.width)
    }
    update() {
        this.position.y += this.velocity.y
        this.draw()
        this.position.x +=this.velocity.x
    }
}

const player = new Player()
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
player.draw()

function animate(){
    requestAnimationFrame(animate)
    player.update()

    if (keys.right.pressed) {
        player.velocity.x = 5
    }else if (keys.left.pressed) {
        player.velocity.x = -5
    } else player.velocity.x = 0
} 

addEventListener('keydown',  ({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = true
            break
        
         case 83:
            console.log('down')
            break
        
        case 68:
            console.log('right')
            keys.right.pressed = true
            break
        case 87:
            console.log('up')
            player.velocity.y  -= 20
            break
    }

})

addEventListener('keyup',  ({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = false
            break
        
         case 83:
            console.log('down')
            break
        
        case 68:
            console.log('right')
            keys.right.pressed = false
            break
        case 87:
            console.log('up')
            player.velocity.y  -= 20
            break
    }

    console.log(keys.right.pressed)
})