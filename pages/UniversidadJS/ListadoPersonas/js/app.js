
const personas = [
    new Persona('Karla','Tenorio'),
    new Persona('Marcos','Cuenca'),
    new Persona('Firulais','Cuenca Tenorio')
];


function mostrarPersonas(){
    console.log("Se está ejecutando el metodo mostar personas");
    let texto = '';
    for (let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;

}


const forma = document.forms['forma'];
const nombre = forma['nombre'];
const apellido = forma['apellido']; 
function agregarPersona(){
 
     if(nombre.value != '' && apellido.value!=''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
        limpiarCampos();
     }else{
        alert('Información Incompleta');
     }
    
}


function limpiarCampos(){
    nombre.value='';
    apellido.value='';
}