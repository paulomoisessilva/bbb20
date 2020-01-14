$(function(){
    $("#titulo").append(" - Estatísticas")
})



$(function(){
    $("#concorrentes")
})


$(function(){
    setInterval(function(){
        var tamanho1 = $(".imagem-participante").width()
        var div = $(".imagem-participante")
        var imagem = $($(div).children("img"))
        var tamanho2 = $(imagem).width()
        if(tamanho1>=tamanho2){
            $(imagem).removeClass("img2").addClass("img1")
        }else{
            $(imagem).addClass("img2").removeClass("img1")
        }
    },100)
})

