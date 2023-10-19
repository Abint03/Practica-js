async function asincronica(){
    return "soy asincronica";
}

let a=asincronica().then(exito=>console.log(exito));
console.log(a) //devuelve objeto tipo promise