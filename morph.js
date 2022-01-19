//grabbing elements from the DOM

let switchCtn = document.querySelector('#switch-cnt')
let switchC1 = document.querySelector('#switch-c1')
let switchC2 = document.querySelector('#switch-c2')
let switchCircle = document.querySelectorAll('.switch-circle')
let switchBtn = document.querySelectorAll('.switch-btn')
let aContainer = document.querySelector('#a-container')
let bContainer = document.querySelector('#b-container')
let allButtons = document.querySelectorAll('.submit')

//creating a function to switch between sign in and out buttons

let getButtons = e => e.preventDefault()

let changeForm = e => {
  switchCtn.classList.add('is-gx')
  setTimeout(function () {
    switchCtn.classList.remove('is-gx')
  }, 1500)

  switchCtn.classList.toggle('is-txr')
  switchCircle[0].classList.toggle('is-txr')
  switchCircle[1].classList.toggle('is-txr')

  switchC1.classList.toggle('is-hidden')
  switchC2.classList.toggle('is-hidden')
  aContainer.classList.toggle('is-txl')
  bContainer.classList.toggle('is-txl')
  bContainer.classList.toggle('is-z200')
}

let mainF = e => {
  for (var i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener('click', getButtons)
  for (var i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener('click', changeForm)
}

window.addEventListener('load', mainF)


//melhoramentos futuros que não estão presentes no desafio
//1 - restringir campos de email/pass/nome
//2- box adaptação tela cheia - bug [RESOLVIDO]
//3 - redirecionamento página (links externos)
//4 - colocar uma logo bonitinha
//5-tornar campos obrigatórios form e alert [EM ANDAMENTO]
//6 -transformar forgot pass em link ativo