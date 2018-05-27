function criarElemento(){
    var p = document.createElement("p");
    p.innerHTML = 'Hello World! ';
    document.body.appendChild(p);

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

function mudarCorDoTitulo(id) {
    document.getElementById(id).setAttribute('style', 'color:blue');
}