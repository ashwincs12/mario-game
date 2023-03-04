const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 4.5

class Player{
    constructor(){
        this.position = {
            x:100,
            y:100
        }
        this.velocity = {
            x:0,
            y:0
        }
        this.width = 30
        this.height = 30
    }

    draw(){
        c.fillStyle = 'black'
        c.fillRect(this.position.x,this.position.y,this.height,this.width,this.velocity)
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y

        if(this.position.y+this.height+this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else 
            this.velocity.y = 0
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


function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update()
}

animate()
