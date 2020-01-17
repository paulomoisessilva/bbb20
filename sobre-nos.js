
$(function(){
    $("#titulo").append(" - Sobre Nós")
    $("#sobreNos").addClass("active")
})

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
  
    })
  })