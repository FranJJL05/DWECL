import React, { useState } from 'react'
import db from '../db/db.json'
import CardProductos from './CardProductos'

export default function Carrusel() {
    const [indice, setIndice] = useState(0);
    const productos = db.productos;

    const handleNext = () => {
        if (indice < productos.length - 1) {
            setIndice((contador) => (contador + 1));
        }
    };

    const handlePrev = () => {
        if (indice > 0) {
            setIndice((contador) => (contador - 1));
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '20px' }}>
            <button onClick={handlePrev} disabled={indice === 0}>Anterior</button>

            {productos.length > 0 && (
                <CardProductos key={productos[indice].id} producto={productos[indice]} />
            )}

            <button onClick={handleNext} disabled={indice === productos.length - 1}>Siguiente</button>

        </div>
    )
}
