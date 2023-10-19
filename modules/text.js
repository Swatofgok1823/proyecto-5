const text = {};
function length(texto){
    return texto.length;
}

function toUpperCase(texto){
    return texto.toUpperCase();
}

function toLowerCase(texto){
    return texto.toLowerCase();
}

function sen(texto){
    return texto[0];
}

function AAA(texto){
    return texto.at(-2);
}

function substring(texto){
    return texto.substring(1);
}

function Bbb(texto){
    return texto[0].toUpperCase()
}

function Ccc(texto){
    return "Hola Mi  Nombre Es : " + texto
}

function repeat(texto){
    return texto.repeat(3)
}


text.length = length;
text.toUpperCase = toUpperCase;
text.toLowerCase = toLowerCase;
text.sen = sen;
text.AAA = AAA;
text.substring = substring;
text.Bbb = Bbb;
text.Ccc = Ccc;
text.repeat = repeat;


module.exports = text
