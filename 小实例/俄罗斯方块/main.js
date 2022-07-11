var DOM = document.querySelector('.map')



function newGame() {
  init()
}

window.onload = function () {
  newGame()
}

function init() {
  let table = document.createElement('table')
  for (let i = 0; i < 20; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j < 10; j++) {
      let td = document.createElement('td')
      td.style.width = '20px'
      td.style.height = '20px'
      td.style.backgroundColor = 'red'
      tr.appendChild(td)
    }
    console.log(tr)
    table.appendChild(tr)
  }
  DOM.appendChild(table)
}
