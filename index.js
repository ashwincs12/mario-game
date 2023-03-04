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
    }
}


class Platform{
    constructor(){
        this.position={
            x:0,
            y:0
        }
        this.width=200
        this.height=20
    }
    draw(){
        c.fillStyle='blue'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}
const player = new Player()
player.draw()

function animate(){
    requestAnimationFrame(animate)
    player.update()
}

