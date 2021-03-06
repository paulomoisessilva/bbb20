$(function() {
    $("#titulo").append(" - Estatísticas")
})



$(function() {
    $("#concorrentes")
    $("#inicioNav").addClass("active")
})



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
}, {
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


var dadosGerais = []



function addCards(ultimoDado) {
    let ud = ultimoDado

    var horario = ud[0]
    var paredao = ud[1]

    var cards = []

    var card1 = []
    card1.push(ud[2])
    card1.push(ud[3])
    card1.push(ud[4])
    card1.push(ud[11])
    card1.push(ud[12])
    card1.push(ud[13])

    cards.push(card1)

    var card2 = []
    card2.push(ud[5])
    card2.push(ud[6])
    card2.push(ud[7])
    card2.push(ud[14])
    card2.push(ud[15])
    card2.push(ud[16])

    cards.push(card2)


    if (ud[10]) {
        var card3 = []
        card3.push(ud[8])
        card3.push(ud[9])
        card3.push(ud[10])

        card3.push(ud[17])
        card3.push(ud[18])
        card3.push(ud[19])

        cards.push(card3)
    }

    if (ud[20]) {
        var card4 = []
        card4.push(ud[20])
        card4.push(ud[21])
        card4.push(ud[22])

        card4.push(ud[23])
        card4.push(ud[24])
        card4.push(ud[25])

        cards.push(card4)
    }


    if (ud[26]) {
        var card5 = []
        card5.push(ud[26])
        card5.push(ud[27])
        card5.push(ud[28])

        card5.push(ud[29])
        card5.push(ud[30])
        card5.push(ud[31])

        cards.push(card5)
    }

    var cardsText = ""

    cards.forEach(function(x) {
        var perc = (Math.round(x[2] * 10000) / 100) + "%"
        var med = (Math.round(x[3] * 1000) / 10) + "%"
        var max = (Math.round(x[5] * 1000) / 10) + "%"
        var min = (Math.round(x[4] * 1000) / 10) + "%"
        cardsText += `
      <div class="col row p-5 text-center center-block">
      <div class="col-12 d-flex justify-content-center">
        <div class="imagem-participante shadow">
          <img src="${x[0]}" alt="">
        </div>
      </div>
      <div class="col-12 dados-baixados">
        <h2>${x[1]}</h2>
        <h1>${perc}</h1>
        <p> <strong> <i class="fa fa-arrow-up" aria-hidden="true"></i>Max: </strong> ${max} </p>
        <p> <strong> <i class="fa fa-arrow-right" aria-hidden="true"></i> Médio:</strong> ${med}</p>
        <p> <strong> <i class="fa fa-arrow-down" aria-hidden="true"></i> Mínimo: </strong>${min} </p>
      </div>
    </div>
      `
    })

    $("#concorrentes").html(cardsText)

    $("#navbarDropdown").html("Paredão " + paredao)
}





function addDadosGrafico(dados, paredao) {

    var d1 = dados.filter(function(x) {
        return x[1] == paredao
    })
    var d0 = transpose(d1)
    console.log(d0)
    var p1 = (d0[4]).map(function(x) { return (Math.round(x * 1000) / 10) })
    var p2 = (d0[7]).map(function(x) { return (Math.round(x * 1000) / 10) })
    var p3 = (d0[10]).map(function(x) { return (Math.round(x * 1000) / 10) })
    var p4 = (d0[22]).map(function(x) { return (Math.round(x * 1000) / 10) })
    var p5 = (d0[27]).map(function(x) { return (Math.round(x * 1000) / 10) })

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

    var dadoP2 = {
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

    var dadoP4 = {
        label: d0[21][0],
        data: p4,
        backgroundColor: [
            'rgba(138, 0, 230, 0.2)'
        ],
        borderColor: [
            'rgba(138, 0, 230, 1)'
        ],
        borderWidth: 1
    }

    var dadoP5 = {
        label: d0[26][0],
        data: p5,
        backgroundColor: [
            'rgba(230, 184, 0, 0.2)'
        ],
        borderColor: [
            'rgba(230, 184, 0, 1)'
        ],
        borderWidth: 1
    }
    var dadosGT = [dadoP1, dadoP2]

    if (d0[9][0]) {
        dadosGT.push(dadoP3)
    }

    if (d0[21][0]) {
        dadosGT.push(dadoP4)
    }

    if (d0[26][0]) {
        dadosGT.push(dadoP5)
    }

    var datas0 = (d0[0]).map(function(x) {
        var y = new Date(x)
        return (y.toLocaleString())
    })

    if (datas0.length < 6) {
        for (i = (datas0.length + 1); i < 7; i++) {
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


function addDadosGrafico2(dados, paredao) {

    var d1 = dados.filter(function(x) {
        return x[1] == paredao
    })
    var d0 = transpose(d1)
    console.log(d0)
    var p1 = (d0[11]).map(function(x) { return (Math.round(x * 1000) / 10) })
    var p2 = (d0[14]).map(function(x) { return (Math.round(x * 1000) / 10) })
    var p3 = (d0[17]).map(function(x) { return (Math.round(x * 1000) / 10) })
    var p4 = (d0[23]).map(function(x) { return (Math.round(x * 1000) / 10) })
    var p5 = (d0[29]).map(function(x) { return (Math.round(x * 1000) / 10) })

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

    var dadoP2 = {
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

    var dadoP4 = {
        label: d0[21][0],
        data: p4,
        backgroundColor: [
            'rgba(138, 0, 230, 0.2)'
        ],
        borderColor: [
            'rgba(138, 0, 230, 1)'
        ],
        borderWidth: 1
    }

    var dadoP5 = {
        label: d0[26][0],
        data: p5,
        backgroundColor: [
            'rgba(230, 184, 0, 0.2)'
        ],
        borderColor: [
            'rgba(230, 184, 0, 1)'
        ],
        borderWidth: 1
    }
    var dadosGT = [dadoP1, dadoP2]

    if (d0[9][0]) {
        dadosGT.push(dadoP3)
    }

    if (d0[21][0]) {
        dadosGT.push(dadoP4)
    }

    if (d0[26][0]) {
        dadosGT.push(dadoP5)
    }

    var datas0 = (d0[0]).map(function(x) {
        var y = new Date(x)
        return (y.toLocaleString())
    })

    if (datas0.length < 6) {
        for (i = (datas0.length + 1); i < 7; i++) {
            datas0.push("")
        }
    }

    window.dadosGrafico1 = dadosGT

    var ctx1 = document.getElementById('myChart1').getContext('2d');
    var myChart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: datas,
            datasets: dadosGrafico1
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
// $(function () {
//   $.getJSON("https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec?func=get", function (data) {
//     var nome = Object.keys(data)[0]
//     var dados = data[nome]

//     var ultimo = dados[dados.length - 1]
//     dadosGerais = dados

//     var lastDate = new Date(ultimo[0])
//     var lastDateText = "<strong>Última Atualização:</strong> " + lastDate.toLocaleString()

//     $("#horario").html(lastDateText)

//     addParedoes(ultimo)
//     addCards(ultimo)
//     addDadosGrafico(dados,ultimo[1])

//   })
// })



$(function() {
    var local = window.location.href
    var dado = local.split("?")
    var dado0 = dado[1]

    if (dado0) {
        $.getJSON("https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec?func=get", function(data) {
            var nome = Object.keys(data)[0]
            var dados = data[nome]

            var d1 = dados.filter(function(x) {
                return x[1] == dado0
            })

            var ultimo = d1[d1.length - 1]
            var ultimo1 = dados[dados.length - 1]
            dadosGerais = dados

            var lastDate = new Date(ultimo1[0])
            var lastDateText = "<strong>Última Atualização:</strong> " + lastDate.toLocaleString()

            $("#horario").html(lastDateText)

            addParedoes(ultimo1)
            addCards(ultimo)
            addDadosGrafico(dados, dado0)
            addDadosGrafico2(dados, dado0)

        })
    } else {
        $.getJSON("https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec?func=get", function(data) {
            var nome = Object.keys(data)[0]
            var dados = data[nome]

            var ultimo = dados[dados.length - 1]
            dadosGerais = dados

            var lastDate = new Date(ultimo[0])
            var lastDateText = "<strong>Última Atualização:</strong> " + lastDate.toLocaleString()

            $("#horario").html(lastDateText)

            addParedoes(ultimo)
            addCards(ultimo)
            addDadosGrafico(dados, ultimo[1])
            addDadosGrafico2(dados, ultimo[1])
        })
    }
})