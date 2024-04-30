let cantidad = prompt("Cuantos alumnos son");
let diasTotales = 10;
let porcentajePedidaSemestre = 0.10;
let numeroDiasPerdidaMat = diasTotales * porcentajePedidaSemestre;
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)),0];
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (let i = 0; i < diasTotales; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let ausencia = diasTotales - alumnosTotales[alumno][1];
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    ______Presentes ${alumnosTotales[alumno][1]} <br>
    ______Ausencia ${ausencia}<br>`;

    if(ausencia > numeroDiasPerdidaMat){
        resultado += "REPROBADO POR INSISTENCIA<br><br>";
    }else {
        resultado += "<br><br>";
    }
    document.write(resultado);
}