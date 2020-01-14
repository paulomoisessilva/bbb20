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
</div>
`



$(function () {
    setTimeout(function(){
        var pp = [["Paredão 1",0], ["Paredão 2",1], ["Paredão 3",2]]

        var pp0 = ""
        pp.forEach(function (x) {
            pp0 = pp0+`<a class="dropdown-item" href="#" paredao=${x[1]}> ${x[0]}</a> `
        })
    
        $("#paredoesAtualizar").html(pp0)    
    },1000)
})

$(function () {
    $("#nav").html(navbar1)
})