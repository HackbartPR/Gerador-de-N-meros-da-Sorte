function Inicio() {
  //Declaração das variáveis
  var campoRange = document.getElementById('range').value
  var campoQuantidade = document.getElementById('quantidade').value
  var tagUl = document.getElementsByTagName('ul')[0]

  var i = 0
  var j = 0

  let randomNumber
  let tmp

  //Limpando a lista
  tagUl.innerHTML = ''

  //Verificar se todos os campos foram preenchidos
  if (campoRange == '' || campoQuantidade == '') {
    window.alert('Por favor, preencher todos os campos')
  } else {
    //Gerar uma lista de números Randomicos
    var listaNumeros = new Array(parseInt(campoRange))

    //Limpando Lista Numeros
    for (let i = 0; i < campoRange; i++) {
      listaNumeros[i] = 0
    }

    //Preenchendo Lista Numeros
    for (let i = 0; i < campoRange; i++) {
      if (i > 0) {
        listaNumeros[i] = listaNumeros[i - 1] + 1
      } else {
        listaNumeros[i] = 1
      }
    }

    //Embaralhando Números
    for (let i = listaNumeros.length; i; ) {
      randomNumber = (Math.random() * i--) | 0
      tmp = listaNumeros[randomNumber]
      // troca o número aleatório pelo atual
      listaNumeros[randomNumber] = listaNumeros[i]
      // troca o atual pelo aleatório
      listaNumeros[i] = tmp
    }

    while (i < parseInt(campoQuantidade)) {
      var tagLi = document.createElement('li')
      var tagDiv = document.createElement('div')

      tagDiv.setAttribute('class', 'div_card')
      tagLi.appendChild(tagDiv)
      tagUl.appendChild(tagLi)

      tagDiv.innerText = listaNumeros[i]
      i++
    }
  }
}

document.getElementById('button').addEventListener('click', Inicio)
/* document.getElementById('button').addEventListener('click', RandomTeste) */
