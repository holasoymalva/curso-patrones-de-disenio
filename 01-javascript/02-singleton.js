
const miSingleton = ((()=>{
    let instancia;

    function crearInstancia(){
        const objeto =  new Object();
        return objeto;
    }

    return {
        instanciacion(){
            if(!instancia){
                instancia = crearInstancia();
            }
            return instancia;
        }
    }
}))();

let instancia1 = {};
let instancia2 = {};

console.log(`¿Esto es lo mismo? ${instancia1 === instancia2}`);
instancia1 = miSingleton.instanciacion();
instancia2 = miSingleton.instanciacion();
console.log(`¿Esto es lo mismo? ${instancia1 === instancia2}`);
