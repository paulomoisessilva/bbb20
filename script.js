// NAV BAR
var inicioNav = `<li class="nav-item">
<a class="nav-link" href="/">Início</a>
</li>`

var metodologiaNav = `<li class="nav-item">
<a class="nav-link" href="/metodologia">Metodologia </a>
</li>`

var paredoesNav = `<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
  aria-haspopup="true" aria-expanded="false">
  Paredões
</a>
<div id = "paredoesAtualizar" class="dropdown-menu" aria-labelledby="navbarDropdown">
  <a class="dropdown-item" href="#">1º Paredão</a>
</div>
</li>`


var navbar1 = `
<a class="navbar-brand" id="titulo">BBB 20</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    ${inicioNav}
    ${metodologiaNav}
    ${paredoesNav}
    </ul>
    <a href="https://twitter.com/pmsilvapm2?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @pmsilvapm2</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
`
var datas = ['1', '2', '3', '4', '5', '6']

var dadosGrafico = [{
  label: 'carregando...',
  data: [10, 19, 3, 5, 2],
  backgroundColor: [
    'rgba(141,182,75, 0.2)'
  ],
  borderColor: [
    'rgba(141,182,75, 1)'
  ],
  borderWidth: 1
}, {
  label: 'carregando...',
  data: [16, 29, 13, 25, 22],
  backgroundColor: [
    'rgba(66,179,198, 0.2)'
  ],
  borderColor: [
    'rgba(66,179,198, 1)'
  ],
  borderWidth: 1
},{
  label: 'carregando...',
  data: [66, 67, 68, 69, 66],
  backgroundColor: [
    'rgba(228,109,103, 0.2)'
  ],
  borderColor: [
    'rgba(228,109,103, 1)'
  ],
  borderWidth: 1
}]



$(function () {
  $("#nav").html(navbar1)
})

var dadosGerais = []



function addCards(ultimoDado){
    let ud = ultimoDado

    var horario = ud[0]
    var paredao = ud[1]

    var cards = []
    
    var card1 = []
    card1.push(ud[2])
    card1.push(ud[3])
    card1.push(ud[4])

    cards.push(card1)

    var card2 = []
    card2.push(ud[5])
    card2.push(ud[6])
    card2.push(ud[7])

    cards.push(card2)


    if(ud[8]){
      var card3 = []
      card3.push(ud[8])
      card3.push(ud[9])
      card3.push(ud[10])
  
      cards.push(card3)
    }
    
    var cardsText = ""

    cards.forEach(function(x){
      var perc = (Math.round(x[2]*1000) / 10)+"%"
      cardsText += `
      <div class="col row p-5 text-center center-block">
      <div class="col-12 d-flex justify-content-center">
        <div class="imagem-participante shadow">
          <img src="${x[0]}" alt="">
        </div>
      </div>
      <div class="col-12">
        <h2>${x[1]}</h2>
        <h1>${perc}</h1>
      </div>
    </div>
      `
    })

    $("#concorrentes").html(cardsText)

    $("#navbarDropdown").html("Paredão "+paredao)
}


function addParedoes(ultimoDado){

  var paredao = ultimoDado[1]+1
  
  var pp = []
  for(i = 1; i < paredao; i++){
    pp.push(i)
  }

  var pp0 = ""
    pp.forEach(function (x) {
      var text = "Paredão "+x
      pp0 = pp0 + `<a class="dropdown-item" href="#" paredao=${x}> ${text}</a> `
    })

    $("#paredoesAtualizar").html(pp0)
}


function addDadosGrafico(dados,paredao){
  
  var d1 = dados.filter(function(x){
    return x[1]==paredao
  })
  var d0 = transpose(d1)
  var p1 = (d0[4]).map(function(x){return(Math.round(x*1000)/10)})
  var p2 = (d0[7]).map(function(x){return(Math.round(x*1000)/10)})
  var p3 = (d0[10]).map(function(x){return(Math.round(x*1000)/10)})

  var dadoP1 = {
    label: d0[3][0],
    data: p1,
    backgroundColor: [
      'rgba(141,182,75, 0.2)'
    ],
    borderColor: [
      'rgba(141,182,75, 1)'
    ],
    borderWidth: 1
  }

  var dadoP2 =  {
    label: d0[6][0],
    data: p2,
    backgroundColor: [
      'rgba(66,179,198, 0.2)'
    ],
    borderColor: [
      'rgba(66,179,198, 1)'
    ],
    borderWidth: 1
  }

  var dadoP3 = {
    label: d0[9][0],
    data: p3,
    backgroundColor: [
      'rgba(228,109,103, 0.2)'
    ],
    borderColor: [
      'rgba(228,109,103, 1)'
    ],
    borderWidth: 1
  }

  var dadosGT = [dadoP1,dadoP2]

  if(d0[9][0]){
    dadosGT.push(dadoP3)
  }

  var datas0 = (d0[0]).map(function(x){
    var y = new Date(x)
    return(y.toLocaleString())
  })

  if(datas0.length < 6){
    for(i = (datas0.length+1); i < 7; i++){
      datas0.push("")
    }
  }

  window.datas = datas0
  window.dadosGrafico = dadosGT

  var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: datas,
        datasets: dadosGrafico
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });
}

$(function () {
  $.getJSON("https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec?func=get", function (data) {
    var nome = Object.keys(data)[0]
    var dados = data[nome]

    var ultimo = dados[dados.length - 1]
    dadosGerais = dados

    var lastDate = new Date(ultimo[0])
    var lastDateText = "<strong>Última Atualização:</strong> " + lastDate.toLocaleString()

    $("#horario").html(lastDateText)

    addParedoes(ultimo)
    addCards(ultimo)
    addDadosGrafico(dados,ultimo[1])

  })
})

// https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec
// https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec?func=add&dados={"dados":["Olá tudo bem?",2,3,4,5,6,7,8,9,10]}



transpose = m => m[0].map((x,i) => m.map(x => x[i]))