const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
    }

    draw()  {
        c.fillStyle= 'red'
        c.fillRect(this.position.x, this.position.y, 50, 150)

    }


    draw() {
        this.draw()
        this.position.y += 10 
    }
}

const player = new Spire({ 
position: {
    x: 0, 
    y: 0
},
velocity: {
    x: 0,
    y: 0
    
}
})

player.draw()

const enemy = new Spire({ 
    position: {
        x: 400, 
        y: 100
    },
    velocity: {
        x: 0,
        y: 0 
        
    }
    }) 

enemy.draw()

console.log(player)

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black' 
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
}

animate()



