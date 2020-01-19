// NAV BAR
var inicioNav = `<li class="nav-item">
<a id="inicioNav" class="nav-link" href="/">Início</a>
</li>`

var metodologiaNav = `<li class="nav-item">
<a id="metodologiaNav" class="nav-link" href="/metodologia">Metodologia </a>
</li>`

var sobreNos = `<li class="nav-item">
<a id="sobreNos" class="nav-link" href="/sobre-nos">Sobre Nós </a>
</li>`

var participantes = `<li class="nav-item">
<a id="participante" class="nav-link" href="/participantes">Participantes </a>
</li>`

var paredoesNav = `<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
  aria-haspopup="true" aria-expanded="false">
  Paredões
</a>
<div id = "paredoesAtualizar" class="dropdown-menu" aria-labelledby="navbarDropdown">
  <a class="dropdown-item" href="#">Paredão 1</a>
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
    ${sobreNos}
    ${participantes}
    ${paredoesNav}
    </ul>
    <a href="https://twitter.com/pmsilvapm2?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @pmsilvapm2</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
`

$(function() {
    $("#nav").html(navbar1)
})

// https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec
// https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec?func=add&dados={"dados":["Olá tudo bem?",2,3,4,5,6,7,8,9,10]}



transpose = m => m[0].map((x, i) => m.map(x => x[i]))


function addParedoes(ultimoDado) {

    var paredao = ultimoDado[1] + 1

    var pp = []
    for (i = 1; i < paredao; i++) {
        pp.push(i)
    }

    var pp0 = ""
    pp.forEach(function(x) {
        var text = "Paredão " + x
        pp0 = pp0 + `<a class="dropdown-item" href="/?${x}" paredao=${x}> ${text}</a> `
    })

    $("#paredoesAtualizar").html(pp0)
}