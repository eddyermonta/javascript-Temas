class Celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara,memoriaRam){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.memoriaRam = memoriaRam;
        this.encendido = false;
    }
    get getColor(){
        return this.color;
    }
    get getPeso(){
        return this.peso;
    }
    get getResolucionPantalla(){
        return this.resolucionPantalla;
    }
    get getResolucionCamara(){
        return this.resolucionCamara;
    }
    get getMemoriaRam(){
        return this.memoriaRam;
    }
    set setColor(color){
        this.color = color;
    }
    set setPeso(peso){
        this.peso = peso;
    }
    set setResolucionPantalla(resolucionPantalla){
        this.resolucionPantalla = resolucionPantalla;
    }
    set setResolucionCamara(resolucionCamara){
        this.resolucionCamara = resolucionCamara;
    }
    set setMemoriaRam(memoriaRam){
        this.memoriaRam = memoriaRam;
    }
    prender() {
        return (!this.encendido)?
        "celular prendido <br>":"celular apagado <br>";
    }
    reiniciar(){
        return (this.encendido)?
        "celular reiniciando <br>" : "celular esta apagado <br>";
    }
    tomarFoto(){
        return`celular toma fotos en una resolucion de
        ${this.resolucionCamara}<br>`;
    }
    tomarVideo(){
        return `celular toma videos en una resolucion de
        ${this.resolucionCamara} <br>`;
    }
}

let celularRojo = new Celular("rojo","150g","5","full hd","2GB");

document.write(celularRojo.prender());
document.write(celularRojo.tomarFoto());
document.write(celularRojo.tomarVideo());
document.write(celularRojo.encendido());
