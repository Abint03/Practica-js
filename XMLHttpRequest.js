//XML funciona como HMTL, se usaba antes

let datosJson; 
let xhr= new XMLHttpRequest(); //se utiliza en programacion ajax 

xhr.open('GET',"https://rickandmortyapi.com/api/character/10",true);

xhr.responseType='json';
xhr.onload=function(){
    if(xhr.status===200){
        datosJson=xhr.response
        let texto= document.getElementById("nombre");
        texto.textContent=datosJson.name;
    }else{
        console.log("error");
    }
}
xhr.send();