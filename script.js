// const card = document.querySelector('.container-row')
// const getJson = 'disciplinas.json'

fetch('disciplinas.json')
    .then(res => res.json())
    .then(json => {
        jsoncar = json
        criar(json)
    })
    // .then(json => criar(json))
    .catch(erro => error())

function error(){
    alert('ERRO')
}
function criar(cards){
    const view = cards
        .map(i => exibir(i))
        .join('')
    card.innerHTML = view
}

function exibir(dis){
    const div = `<div class="card card-body" style="width: 18rem;">
    <div class="card-body/*">
      <h5 class="card-title">${dis.nome}</h5>
      <p class="card-text" style="margin-bottom: 0">Código: ${dis.cod}</p>
      <p class="card-text" style="margin-bottom: 0">Período: ${dis.periodo}</p>
      <p class="card-text" style="margin-bottom: 0">Requisito: ${dis.requisito}</p>
      <p class="card-text" style="margin-bottom: 0">Carga Horária Total: ${dis.cht}</p>
      <p class="card-text" style="margin-bottom: 0">Carga Horárial Semana: ${dis.chs}</p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      <button class="btn btn-outline-secondary" type="button">Aprovado</button>
      <button class="btn btn-outline-secondary" type="button">Cursando</button>
      <button class="btn btn-outline-secondary" type="button">Reprovado</button>
    </div>
  </div>`
  return div
}

// criar(disciplinas)
// getDisciplinas(getJson)

// function getDisciplinas(url){
//     fetch(url)
//         .then(res => res.json())
//         .then(json => criar(json))
//         .catch(erro => error())
// }

// function criar(disciplinas){
//     card.innerHTML = ''
//     disciplinas.map(i => card.insertAdjacentHTML('beforeend', exibir(i)))

// }