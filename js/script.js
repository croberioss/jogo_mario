const mario = document.querySelector('.mario-walking'); 
const pipe = document.querySelector('.pipe'); 

const gameOver = document.querySelector('.game-over-board ')

const btn = document.querySelector('.refresh')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}


const loop = setInterval( () => {


    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');
    const pipePosition = pipe.offsetLeft;
    console.log(pipePosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80 ) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
    
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = "./imagens/mario-game-over.png"
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        gameOver.style.display = 'block'



        clearInterval(loop)
    }

} , 10)

document.addEventListener('keydown', jump);

btn.addEventListener('click', () => {
    location.reload()
})


