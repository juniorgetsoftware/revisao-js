//declaração de variáveis e tipos
var num = 10;
var bool = true;
var str = 'String';
var str2 = "String 2";
var strTemmplate = "String \ntemplate\nv\u00E1rias\nlinhas";
//retorno de função
function func() {
}
if (bool != null) { }
if (bool != undefined) { }
if (bool) {
    var i;
    for (i = 0; i < 5; i++) {
        console.log(i);
    }
}
//a var i não ficou restrita ao escopo do if (ESTÁ EM ESCOPO GLOBAL)
console.log("Continua imprimindo o valor de i: " + i);
if (bool) {
    var j = void 0;
    for (j = 0; j < 5; j++) {
        console.log(j);
    }
}
//a var j FICOU restrita ao escopo do if 
// console.log("Continua imprimindo o valot de j: "+j);  {{não foi possível encontrar 'j'}}
// ---------------------------------
//array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//tupla
var tupla;
tupla = ['Valor da string', 123];
console.log(tupla[0].toLocaleLowerCase());
//enum
var Dia;
(function (Dia) {
    Dia[Dia["DOMINGO"] = 0] = "DOMINGO";
    Dia[Dia["SEGUNDA"] = 1] = "SEGUNDA";
    Dia[Dia["TERCA"] = 2] = "TERCA";
    Dia[Dia["QUARTA"] = 3] = "QUARTA";
    Dia[Dia["QUINTA"] = 4] = "QUINTA";
    Dia[Dia["SEXTA"] = 5] = "SEXTA";
    Dia[Dia["SABADO"] = 6] = "SABADO";
})(Dia || (Dia = {}));
var dia = Dia.QUINTA;
console.log(dia);
console.log("Dias: " + Dia[1] + " | " + Dia[5]);
console.log("Dias: " + Dia.SEGUNDA + " | " + Dia.QUINTA);
