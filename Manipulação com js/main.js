function removerPrimeiroElementoDaLista(id){
    var filho = document.getElementById(id).firstChild;
    document.getElementById(id).removeChild(filho);
}

function criarElemento(){
    var h1 = document.createElement("h1");
    h1.innerHTML = 'Hello World! ';
    document.body.appendChild(h1);
}

function addChild(id) {
    var item = document.createElement('li');
    item.innerHTML = 'novo item';
    document.getElementById(id).appendChild(item);
}

function somar(){
    num1 = pegarValorNumerico('num1');
    num2 = pegarValorNumerico('num2');
    res = num1 + num2;
    escrever('resultado', res);
}

function isNumero(num){
    return typeof num === 'number';
}

function pegarValor(id){
    return document.getElementById(id).value;
}

function toFloat(num){
    return parseFloat(num);
}

function pegarValorNumerico(num){
    return toFloat(pegarValor(num));
}

function escrever(onde, valor){
    document.getElementById(onde).innerHTML = valor;
}

function mudarCor(id) {
    document.getElementById(id).setAttribute('style', 'color:blue');
}

function codeHighlight(){
    var code = document.getElementsByClassName('code');
    for(var i = 0; i < code.length; i++){
        code[i].innerHTML = code[i].innerHTML.toString()
        .replace("=", "<span style=\"font-weight: bold\">=</span>")
        .replace("{",  "<span style=\"font-weight: bold\">{</span>")
        .replace("}", "<span style=\"font-weight: bold\">}</span>")
        .replace("var", "<span style=\"font-weight: bold;color:blue;\">var</span>")
        .replace("(", "<span style=\"font-weight: bold\">(</span>")
        .replace(")", "<span style=\"font-weight: bold\">)</span>")
        .replace("console", "<span style=\"font-weight:bold;color:blue;\">console</span>")
        .replace("log", "<span style=\"font-weight: bold\">log</span>");
    }
}