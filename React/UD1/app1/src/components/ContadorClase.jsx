import React, { useState } from 'react'

export default function ContadorClase() {
    const [clase, setClase] = useState({
        nombre: "2 DAW",
        nAlumnos: 0});

    const handleAdd = () => {
        setClase({...clase, nAlumnos: clase.nAlumnos + 1});
    }

    const handleRemove = () => {
        if (clase.nAlumnos > 0) {
            setClase({...clase, nAlumnos: clase.nAlumnos - 1});
        }
    }

    return (
        <div>
            <div>Contador Clase</div>
            <div>Clase: {clase.nombre}</div>
            <div>Alumnos: {clase.nAlumnos}</div>
        
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>

        </div>
    )
}
