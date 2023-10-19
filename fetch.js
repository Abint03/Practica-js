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
/*
let datosJson2;

fetch('https://rickandmortyapi.com/api/character/2', {method:'GET'})
.then(response=>response.json())
.then(salida=>{
    datosJson2=salida;
    let text=document.getElementById("ej2");
    text.textContent=datosJson2.name;
})


let jsonData;
fetch('persona.json',{method: 'POST',body: JSON.stringify(
    {
        nombre: "Thomo",
        edad: 24,
        estudiante: true,
        direccion:{
            calle:"Estrada",
            nro:2000,
            ciudad: "Mar del Plata"
        }
    }
), headers:{
    'Content-Type':'application/json' //indica que pasamos dato en formato json
}})
.then(response)


fetch('https://rickandmortyapi.com/api/character/2',{method: 'GET'})
.then(response=>response.json())
.then(salida=>{

    let imagen=document.getElementById("imagen");    
    imagen.setAttribute("src",salida.image);

}).catch(error=>console.log("ERROR: "+error));
*/


async function getImageById(id){
    try{
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        const responseAPI=await fetch(url,{method: 'GET'});
        if(!responseAPI.ok){
            throw new Error('NO SE PUDO OBTENER EL DATO');
        }
        const data= await responseAPI.json();
        return data;

    }catch(error){
        throw error;
    }

}

document.getElementById("generador").addEventListener("click",(event)=>{
    const randomNum=Math.round(Math.random()*826)+1;
    getImageById(randomNum).then(response=>{
        let imagen=document.getElementById("imagen");
        imagen.setAttribute("src",response.image);
    })
});