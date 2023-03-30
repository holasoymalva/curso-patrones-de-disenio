

function constructorAviones(color){
    this.marca = "Boing";
    this.modelo = "a432";
    this.vida = "15";   
    this.color = color || "blanco";
    this.extras = 0;
    this.caracteristicas = function(){
        return `${this.marca}, ${this.modelo}, ${this.vida}, ${this.color} `
    }
}

// Primer Decorador
function navegacionAutomatica( avion ){
    avion.navegacionAutomatica = true;
    avion.extras++;
}
// Segundo Decorador
function seccionDeLux( avion, texto ){
    avion.lujo = texto;
    avion.extras++;
}

const avionBasico = new constructorAviones();
console.log(avionBasico);

const avionVerde = new constructorAviones("verde");
navegacionAutomatica(avionVerde);
console.log(avionVerde);

const avionAzul = new constructorAviones("Azul");
navegacionAutomatica(avionAzul);
seccionDeLux(avionAzul,"Champanie inclue");
console.log(avionAzul);
