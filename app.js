const btnMenu = document.querySelector('.btn-rond-menu')
const nav = document.querySelector('.nav-gauche')
const allItemNav = document.querySelectorAll('.nav-menu-item')
const ligne = document.querySelector('.cont-ligne')

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')
})

if(window.matchMedia('(max-width: 1300px)')) {
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active')
        })
    })
}

// Animation écriture

const txtAnim = document.querySelector('.txt-animation')

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed:20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Moi c\'est Imane Elouazzani')
.pauseFor(300)
.typeString('<strong>, Developpeuse front-end</strong>')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color: #27ae60"> CSS</span>')
.pauseFor(1000)
.deleteChars(4)
.typeString('<span style="color: #EA39ff"> REACT</span>')
.start()