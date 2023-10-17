/*13. Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica.

function Tarea(tarea){
    this.tarea=tarea;
    this.estado="Pendiente";
    this.completada=()=>{this.estado="Completada"}
    this.consultarEstado=()=>this.estado;
}
function Producto(nombre,precio,stock){
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
    this.mostrarInfo=function(){
        console.log(`Nombre del producto: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.stock}`)
    }
}
function Persona(nombre, edad, profesion){
    this.nombre=nombre;
    this.edad=edad;
    this.profesion=profesion;

}

let arr=[new Tarea("Tareita"),new Producto("Leche","400","20"),new Persona("Abi",20,"Game dev")];

const arregloFiltrado=arr.filter(cosa=> cosa instanceof Producto);
console.log(arregloFiltrado);
const numbers = [1, 2, 3];
const meses = ['Enero', 'Febrero',
'Marzo', 'Abril', 'Mayo', 'Junio']
/**Array de objetos 
const productos = [
{descripcion: 'Lenovo Idepad 320', precio: 1200},
{descripcion: 'Motorola v6', precio: 150},
{descripcion: 'Smart TV', precio: 200},
{descripcion: 'Iphone', precio: 800},
{descripcion: 'Macbook', precio: 1600},
]
const newArray = numbers.concat(productos, meses, true)
console.log(newArray)
*/

function mostrarMensaje(msj, callback){
    console.log(msj);
    callback();
}

mostrarMensaje("Hola, soy el mensaje ", ()=>console.log("Hola soy el callback"));

function sumarAsync(num1,num2,callback){
    const result=num1+num2;
    callback(result);
}

sumarAsync(2,3,(resultado)=>console.log(`RESULTADO: ${resultado}`));

function retrasarEjecucion(callback, miliseg){
    setTimeout(callback,miliseg);
}

retrasarEjecucion(()=>console.log("EjecucionRetrasada"),2000);

function obtenerDatoUser(id, callback){
    setTimeout(function(){
        const usuario={
            user: "abint",
            email:"alegreav@gmail.com",
            userId: id
        };
        callback(usuario);
    },3000);
}

obtenerDatoUser(23, (user)=>console.log(`User: ${user.user}, id: ${user.userId}`));