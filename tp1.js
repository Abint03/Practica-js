/**
 1. Declarar una variable `nombre` y asignarle tu nombre. Imprimir en la consola.
2. Declarar dos variables numéricas `num1` y `num2`, y calcular su suma. Imprimir el resultado.
3. Declarar una constante `PI` con el valor 3.14159. Imprimir en la consola.

let nombre="Abigail";
console.log(nombre);

let num1=1,num2=4;
console.log(num1+num2);

const PI=3.14159;
console.log("Constante PI: "+PI);

/**
 * Funciones: function
4. Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo
personalizado.
5. Crear una función `esPar` que tome un número como parámetro y retorne `true` si es par, y
`false` si es impar.
6. Crear una función `sumarArray` que tome un array de números como parámetro y retorne la
suma de sus elementos.

 
function saludar(nom){
    return console.log("Hola "+nom+" !!!");
}
saludar(nombre);

function esPar(n){
    return (n%2==0);
}
console.log(esPar(num1));
console.log(esPar(num2));

function sumarArray(numeros){
    let resultado=0;
    numeros.forEach(num=>resultado+=num)
    return resultado; 
}
let arreglito=[1,2,3];
console.log("La suma de los elementos del array "+arreglito+" es: "+sumarArray(arreglito))
/**
 * 
 * Objetos literales y constructores
7. Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `profesion`.
8. Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`, y cree un
objeto con esas propiedades.
9. Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`,
`director` y `anio`.


let Persona={
    nombre: "abigail",
    edad: 20,
    profesion: "programadora",
    mostrarInfo: function(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Profesión: ${this.profesion}`);
    }
};

Persona.mostrarInfo();

function Producto(nombre,precio,stock){
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
    this.mostrarInfo=function(){
        console.log(`Nombre del producto: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.stock}`)
    }
}
let producto1=new Producto("Leche",20.0,10);
producto1.mostrarInfo();
Producto.prototype.precioConIva=function(){
    return this.precio*1.21;
}
console.log(producto1.precioConIva());

function Pelicula(titulo,director,anio){
    this.titulo=titulo;
    this.director=director;
    this.anio=anio;
    this.infoPeli= ()=>console.log(`Título: ${this.titulo}, Director: ${this.director}, Año: ${this.anio}`);

}
let peli1=new Pelicula("Tu vieja", "Abigail", "1999");
peli1.infoPeli();



/**
 * Arrays
10. Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.
11. Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado.
12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne
un nuevo array solo con los números pares.


let frutas=["banana","manzana","pera","sandía"];
console.log(frutas[2]);

frutas.push("kiwi");
console.log(frutas);

function filtrarPares(arreglo){
    let arreglo2=[];
    arreglo.forEach(a=>{
        if(a%2==0)
            arreglo2.push(a);
    })
    return arreglo2;
}
let arrNum=[1,2,3,4,5,6,7,8,10,22];
console.log(filtrarPares(arrNum));

/**
 * Funciones y Objetos combinados
13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un
objeto persona con esas propiedades.
14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne
una cadena con su información.


function Personaaa(nombre,edad){
    this.edad=edad;
    this.nombre=nombre;
}
function crearPersona(nombre,edad){
    return new Personaaa(nombre,edad);
}
let personita= crearPersona("Juan",22);
console.log(personita);

function obtenerInfo(pp){
    return `Nombre: ${pp.nombre}, Edad: ${pp.edad}`;
}

console.log(obtenerInfo(personita));


/**
 * 
 * Más sobre Arrays y Funciones
15. Crear una función `duplicarArray` que tome un array de números como parámetro y
retorne un nuevo array con cada elemento duplicado.
16. Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la
cadena invertida.
17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como
parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al
número.


function duplicarArray(arr){
    let arr2=arr;
    arr.forEach(a=>{
        arr2.push(a);
    })
    return arr2;
}
let arreglazo=[1,2,3,4,5,6];
console.log(duplicarArray(arreglazo));



/**
 * Objetos y Arrays de Objetos
18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades como
`nombre`, `edad` y `promedio`.
19. Crear una función `buscarEstudiante` que tome un array de estudiantes y un nombre, y
retorne el objeto del estudiante con ese nombre.
20. Crear una función `promedioClase` que tome el array de estudiantes y retorne el promedio
de sus promedios.


/**
 * Uso avanzado de Objetos y Funciones
21. Crear un objeto `coche` con propiedades como `marca`, `modelo` y `anio`, y métodos como
`arrancar` y `detener`.
22. Crear un constructor `Persona` con propiedades `nombre` y `edad`, y un método `saludar`
que imprima un saludo personalizado.
23. Crear un método `agregarProducto` a la función constructora `Carrito` que agregue un
producto al carrito.

 */

/**
 * Manipulación de Arrays y Objetos
24. Crear una función `ordenarNumeros` que tome un array de números como parámetro y
retorne un nuevo array con los números ordenados de menor a mayor.
25. Crear una función `eliminarEstudiante` que tome un array de estudiantes y un nombre, y
retorne un nuevo array sin el estudiante con ese nombre.
26. Crear una función `totalCarrito` que tome un array de productos y retorne el precio total de
los productos.
 */

/**
 * Uso avanzado de Funciones y Objetos
27. Crear una función `crearCalculadora` que retorne un objeto con métodos `sumar`, `restar`,
`multiplicar` y `dividir`.
28. Crear una función `crearCuentaBancaria` que retorne un objeto con métodos `depositar`,
`retirar` y `saldo`.
29. Crear un constructor `Libro` con propiedades `titulo`, `autor` y `paginas`, y un método
`detalles` que imprima la información del libro.
 */

/**Proyecto Final: Manejo de Datos
30. Crear un programa que simule una lista de tareas (`to-do list`) utilizando objetos y arrays.
Debe permitir agregar tareas, marcar tareas como completadas y listar las tareas pendientes. */

function Tarea(tarea){
    this.tarea=tarea;
    this.estado="Pendiente";
    this.completada=()=>{this.estado="Completada"}
    this.consultarEstado=()=>this.estado;
}

function Lista(){
    this.tareas=[];
    this.nuevaTarea=(nombre)=>{
        this.tareas.push(new Tarea(nombre));
    }
    this.consultarTareasPendientes=()=>{
        console.log("Tareas pendientes: \n")
        this.tareas.forEach(t=>{
            if(t.consultarEstado()=="Pendiente"){
                console.log(`    -${t.tarea}`);
            }
        })
    
    }
    this.consultarTareasCompletadas=()=>{
        console.log("Tareas completadas: \n")
        this.tareas.forEach(t=>{
            if(t.consultarEstado()=="Completada"){
                console.log(`    -${t.tarea}`);
            }
        })
    
    }
    this.tareaTerminada=(nombre)=>{
        this.tareas.forEach(t=>{
            if(t.tarea==nombre){
                t.completada();
            }
        })
    }
}

let toDoList=new Lista();
toDoList.nuevaTarea("Estudiar Angular");
toDoList.nuevaTarea("Comprar milanesas");
toDoList.nuevaTarea("Pagar la facultad");
toDoList.consultarTareasPendientes();
toDoList.tareaTerminada("Comprar milanesas");
toDoList.consultarTareasPendientes();
toDoList.consultarTareasCompletadas();