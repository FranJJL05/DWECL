import db from '../ejerRepasoClase/db.json' with {type: 'json'}



function  combinaEstudiantesYCursos(db){
    let combinaArrayEstudiantesyCursos = [];
    combinaArrayEstudiantesyCursos = combinaArrayEstudiantesyCursos.concat(db.students);
    combinaArrayEstudiantesyCursos = combinaArrayEstudiantesyCursos.concat(db.courses)
    return combinaArrayEstudiantesyCursos;
};

function combianarSpread(bd){
    return [...db.students,...db.courses] 
};



function devulveCursosAlumno(db, idAlumno) {
    return db.enrollments.filter(({ studentId }) => studentId == idAlumno)
        .map((enrollments) => enrollments.courseId);
}


function mostrarAlumno(db, idAlumno){
    const arMatricula = db.enrollments.filter(({ studentId }) => studentId == idAlumno);
    return arMatricula.map(({courseId, enrollmentDate, completed}) => ({courseId, enrollmentDate, completed}));
};


//ordenar todas las matriculaciones por fecha de matriculacion

function ordenar(db){
    const ordenarEsto = db.enrollments.sort((a,b) => new Date (a.enrollmentDate) - new Date(b.enrollmentDate));

    return ordenarEsto
}


/**
 * main12.js    
 */
(function (){
    console.log("Hola desde main12.js");
    console.log("Cargando datos desde JSON...");
    console.log(db);
    console.log("Estudiantes",db.students);
    console.log("Cursos",db.courses);
    console.log("Enrollments",db.enrollments);
    
    console.log("Con concat");
    console.log(combinaEstudiantesYCursos(db));

    console.log("---------");
    console.log("Con spread operator");
    console.log(combianarSpread());

    console.log("Cursos Alumno");
    console.log(devulveCursosAlumno(db, 1));

    console.log(mostrarAlumno(db, 2));

    console.log("---------------------");
    console.log(ordenar(db));

})();