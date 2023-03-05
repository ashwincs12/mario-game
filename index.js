const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1026
canvas.height = 576

const gravity = 2
class Player{
    constructor(){
        this.speed=5
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
        c.fillStyle = 'red'
        c.fillRect(this.position.x,this.position.y,this.height,this.width,this.velocity)
    }
    update() {
        this.draw()
        this.position.x +=this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y+this.height+this.velocity.y <= canvas.height)
            this.velocity.y += gravity

    }
}


class  Platform{
    constructor({x,y}){
        this.position={
            x,
            y
         }
        this.width=200
        this.height=20
    }
    draw(){
        c.fillStyle='black'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}
let platforms=[new Platform({x:0,y:470}),new Platform({x:250,y:400}),new Platform({x:600,y:470}),new Platform({x:1000,y:400}),new Platform({x:1400,y:470}),new Platform({x:1750,y:400}),new Platform({x:2050,y:470}),new Platform({x:2550,y:400}),new Platform({x:2850,y:400})]

let player = new Player()
let keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
 let scrollOffset=0

function init(){
    platforms=[new Platform({x:0,y:470}),new Platform({x:250,y:400}),new Platform({x:600,y:470}),new Platform({x:1000,y:400}),new Platform({x:1400,y:470}),new Platform({x:1750,y:400}),new Platform({x:2050,y:470}),new Platform({x:2550,y:400}),new Platform({x:2850,y:400})]   
    player = new Player()

}
function animate(){
    requestAnimationFrame(animate)
    c.fillStyle='skyblue'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.update()
    platforms.forEach(platform=>{
        platform.draw()
    })
    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed
    }
    else if (keys.left.pressed && player.position.x >100) {
        player.velocity.x = -player.speed
    } 
    else{
        player.velocity.x = 0
        if(keys.right.pressed){
                scrollOffset += player.speed
                platforms.forEach((platform)=>{
                    platform.position.x-=5
                })
            }
            else if(keys.left.presed){
                scrollOffset -= player.speed
                platforms.forEach((platform)=>{
                    platform.position.x+=5
                })
            }
        } 

    if(scrollOffset>2600){
        alert("Game won")
    }

    if(player.position.y>canvas.height){
        init()
    }

    platforms.forEach(platform=>{
    if(player.position.y+player.height<=platform.position.y && 
        player.position.y+player.height+player.velocity.y>=
        platform.position.y && player.position.x+player.width>=
        platform.position.x && player.position.x <= platform.position.x +platform.width){
            player.velocity.y=0
        }
    })

}
animate()

addEventListener('keydown',  ({ keyCode }) => {
    //console.log(keyCode)
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
    //console.log(keyCode)
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


