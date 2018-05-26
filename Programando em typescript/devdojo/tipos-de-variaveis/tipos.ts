//declaração de variáveis e tipos
let num: number = 10;
let bool: boolean = true;
let str: string = 'String';
let str2: string = "String 2";
let strTemmplate: string = `String 
template
várias
linhas`;

//retorno de função
function func(): void{

}

if(bool != null){}
if(bool != undefined){}

if(bool){
    var i:number;
    for(i = 0; i < 5; i++){
        console.log(i);
    }
}
//a var i não ficou restrita ao escopo do if (ESTÁ EM ESCOPO GLOBAL)
console.log("Continua imprimindo o valor de i: "+i);

if(bool){
    let j:number;
    for(j = 0; j < 5; j++){
        console.log(j);
    }
}
//a var j FICOU restrita ao escopo do if 
// console.log("Continua imprimindo o valot de j: "+j);  {{não foi possível encontrar 'j'}}

// ---------------------------------

//array
let list:number[] = [1, 2, 3];
let list2:Array<number> = [1, 2, 3];

//tupla
let tupla:[string, number];
tupla = ['Valor da string', 123];
console.log(tupla[0].toLocaleLowerCase());


//enum
enum Dia {DOMINGO=0, SEGUNDA=1, TERCA=2, QUARTA=3, QUINTA=4, SEXTA=5, SABADO=6}
let dia:Dia = Dia.QUINTA;
console.log(dia);
console.log(`Dias: ${Dia[1]} | ${Dia[5]}`);
console.log(`Dias: ${Dia.SEGUNDA} | ${Dia.QUINTA}`);


