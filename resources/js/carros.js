class carro{
    constructor(piloto, marca, potencia){
        this.piloto = piloto;
        this.marca = marca;
        this.potencia = potencia;
    }
    acelerarCarro(){
        console.log("Vrumm:"+this.potencia);
    }
}

let ferrari = new carro('piloto1',"ferrari",90);
let mclaren = new carro('piloto2',"maclarem",98);
let benntion = new carro('piloto3',"bennetion",80);

let arrCarros = [];
arrCarros.push(ferrari);
arrCarros.push(mclaren);
arrCarros.push(benntion);


for (let i=0; i < arrCarros.length; i++){
    arrCarros[i].acelerarCarro();
}