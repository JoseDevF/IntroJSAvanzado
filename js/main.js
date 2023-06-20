
//const form=document.querySelector('form');

/* Manejador de eventos con un callback que se ejecuta cuando se dispara el evento submit */
//form.addEventListener('submit', guardarInfoEnBaseDatos);//callback

/* form.addEventListener('submit', (event)=>{
}) */


/* function guardarInfoEnBaseDatos(event){
    event.preventDefault();
    //Guardar formulario en la base de datos
} */

function saludar() {
    console.log("HOLA!!")
}

function procesarInfo(callback) {
    callback();
}

procesarInfo(saludar);


console.log("dummy"); //<-Ejecutate

/* Estas dos funciones regresan un valor cada una de ellas */
const soyCien = () => 100;
const soyDoscientos = () => 200;

function soyquinientos() { return 500; }
function soyseiscientos() { return 600; }


function operacionesDosFunciones(func1, func2, func3, func4) {
    const div = func1() / func2();
    const suma = func3() + func4();
    return [div, suma]; //<-Que regresan
}

const suma = operacionesDosFunciones(soyCien, soyDoscientos, soyquinientos, soyseiscientos)[1];
const div = operacionesDosFunciones(soyDoscientos, soyCien, soyquinientos, soyseiscientos)[0];
console.log("Suma es: ", suma, "Division es: ", div);

/* 
function setTimeout() {
    console.log("sobreescribir");
} */

//setTimeout(saludar, 2000);


console.log(1)
setTimeout(() => {
    console.log(2)
}, 3000);
setTimeout(() => {
    console.log(3)
}, 3000)
console.log(4)


console.log('A') //->1 
setTimeout(() => {
    console.log('B')//->2
}, 2000);
for (let i = 0; i < 9999999999; i++);
console.log('C');//->3


/* async - await siempre de la mano*/

async function llamadaAPINASA() {
    /* vaciamos la información en el componente HTML */
}

const informacionClima = await llamadaAPINASA();

//hacer la orden 

const resultadoSuma = suma(4, 5);

const promesa = new Promise((resolve, reject) => {
    resolve(codigoAEjecutarCasoExitoso);
    reject(codigoAEjecutarCasoError);
})

promesa
    .then((resp) => {
        /* Que todo fluya normal */
    })
    .catch((err) => {

    })
    .finally(() => {
        console.log("Caso por defecto");
    })




