//https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec


$(function() {
    var url = "https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec?func=getParticipantes"
    $.getJSON(url, function(data) {
        data0 = data.result
        var titulos = data0.shift()
        var template = ""
        data0.forEach(x => {
            var atv = ""
            var res0 = ""
            var class0 = ""
            if (x[6] == "Ativo") {
                atv = "dotActive"
                class0 = x[5]
            } else {
                atv = "dotInactive"
                res0 = `<h5>${x[8]}<\h5>`
                class0 = "inativo"
            }

            template += `<div class="col row p-5 text-center center-block ${class0}">
    <div class="col-12 d-flex justify-content-center">
        <div class="imagem-participante shadow">
            <img src="${x[1]}" alt="">
        </div>
    </div>
    <div class="col-12">
        <h2> <span class="${atv}"></span> ${x[0]}</h2>
        <h2>${x[2]} anos</h2>
        <h5>${x[4]}</h5>
        <h4>${x[3]}</h4>
        ${res0}
    </div>
</div>`
        });
        $("#concorrentes").html(template)
    })

})