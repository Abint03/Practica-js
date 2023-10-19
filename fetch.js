//se usa para realizar solicitudes http de manera asincronica, es mas moderno y limpio que xml https request
//recibe la url del recurso y devuelve una promesa

let datosJson;

fetch('persona.json',{method:'GET'})//de web api, retorna promise
.then(response=> response.json())
.then(salida=>{
    datosJson=salida;
    let texto= document.getElementById("nombre");
    texto.textContent=datosJson.nombre;
})
//si se resuelve, then va a retornar el recurso que estábamos buscando. Se pueden concatenar .then

let datosJson2;

fetch('https://rickandmortyapi.com/api/character/2', {method:'GET'})
.then(response=>response.json())
.then(salida=>{
    datosJson2=salida;
    let text=document.getElementById("ej2");
    text.textContent=datosJson2.name;
})