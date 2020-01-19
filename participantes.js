//https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec


$(function() {
    var url = "https://script.google.com/macros/s/AKfycbxEivVIGQ84tnZTYOcB6TeP4kdp522bzbQW9G1fL7WlfzrYKDM/exec?func=getParticipantes"
    $.getJSON(url, function(data) {
        data0 = data.result
        var titulos = data0.shift()
        var template = ""
        data0.forEach(x => {
            var atv = ""
            if (x[6] == "Ativo") {
                atv = "dotActive"
            } else {
                atv = "dotInactive"
            }

            template += `<div class="col row p-5 text-center center-block ${x[5]}">
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
    </div>
</div>`
        });
        $("#concorrentes").html(template)
    })

})