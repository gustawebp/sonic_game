
const nome = prompt("Bem vindo ao joguinho do Sonic. Qual o Seu Nome")


function jump() {
    const sonic = document.getElementById('sonic')
    sonic.classList.add('jump')

        setTimeout(() =>  {
            sonic.classList.remove('jump')
        }
        ,500)

}


const loop = setInterval(() => {
    const obs = document.getElementById('obs-1')
    const sonic = document.getElementById('sonic')
    const ObsPosition = obs.offsetLeft

    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '')

    let p = document.getElementById('score').innerHTML = `Boa sorte ${nome}`
    

    if (ObsPosition <= 15 && ObsPosition > 0 && sonicPosition <= 25 ) {
        
        obs.style.animation = 'none'
        obs.style.left = `${ObsPosition}px`
        sonic.style.animation = 'none'
        sonic.style.bottom = `${sonicPosition}px`
        p.innerHTML = `Parabéns ${nome}`
        
    }







}, 10)


document.addEventListener('keydown', jump)

