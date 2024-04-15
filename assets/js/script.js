

/*var nombre = "hola"
nombre = 2;
console.log("hola");*/
let nombreV = "";
let apellidoV = "";
let edadV = 0;



let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");

let btnenviar = document.getElementById("btnenviar");

btnenviar.addEventListener("click", (e)=>{
    e.preventDefault();
    nombreV = nombre.value;
    apellidoV = apellido.value;
    edadV = edad.value;

    console.log(`nombre : ${nombreV} y el apellido es: ${apellidoV} y la edad es: ${edadV}`);
});