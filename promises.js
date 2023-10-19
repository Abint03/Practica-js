async function asincronica(){
    return "soy asincronica";
}

let a=asincronica().then(exito=>console.log(exito));
console.log(a) //devuelve objeto tipo promise

let firstPromise=new Promise((aceptado, rechazado)=>{
    let a=false;
    (a) 
        ? aceptado("succeful")
        : rechazado("malio sal")
})

firstPromise.then(exito=>console.log(exito)).catch(error=>console.log(error));

////EJEMPLO PROMISE
const empleados=[
    {id:1, nombre:"Abi", sueldo:200000.0},
    {id:2,nombre:"Pepe", sueldo:100000.0},
    {id:3,nombre:"Cacho",sueldo:150000.0}
];

const getEmpleadoById=(id)=>{
    return new Promise((exito, fail)=>{
        const empleado=empleados.find(e=>e.id===id);
        (empleado)
        ? exito(empleado)
        : fail("Empleado no encontrado")
    })
}
const printEmpleado=(e)=>{
    console.log(`Id: ${e.id}, Nombre: ${e.nombre}, Sueldo: ${e.sueldo}`);
}

getEmpleadoById(1).then(exito=>printEmpleado(exito)).catch(fail=>console.log(fail));

