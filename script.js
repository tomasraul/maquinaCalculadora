let txt = document.getElementById("txtn")
let dividir = document.getElementById("n/")
let c = document.getElementById("c")
let mult = document.getElementById("x")
let mais = document.getElementById("mais")
let menus = document.getElementById("menos")
let del = document.getElementById("del")
let virg = document.getElementById("virg")
let igual = document.getElementById("igual")

function limpar(){
    txt.value = ""
}
dividir.addEventListener("click", function() {
    txt.value += "/";
});

mult.addEventListener("click", function() {
    txt.value += "x";
    txt.value = txt.value.replace("x", "*")
});

mais.addEventListener("click", function() {
    txt.value += "+";
});

menus.addEventListener("click", function() {
    txt.value += "-";
});

del.addEventListener("click", function () {
    txt.value = txt.value.slice(0, -1)
})

igual.addEventListener("click", function() {
    try {
        let expressao = txt.value.replace(/,/g, ".");
        let resultado = eval(expressao);
        txt.value = resultado.toFixed(2).replace('.',','); // Formata o resultado com duas casas decimais
    } catch (error) {
        txt.value = "Erro";
    }
});

virg.addEventListener("click", function() {
    // Só adiciona vírgula se o número atual não tiver vírgula
    let valor = txt.value;
    // Verifica o último número digitado
    let partes = valor.split(/[\+\-\*\/]/);
    let ultimoNumero = partes[partes.length - 1];
    if (!ultimoNumero.includes(",")) {
        txt.value += ",";
    }
});


for (let n=0;n<10;n++) {
    let srvc = document.getElementById("n"+ n)
    srvc.addEventListener("click", function(){
        txt.value += n
    })
}