import React from 'react'
import CardProductos from './CardProductos.jsx'
import db from '../db/db.json'
import styles from './CardProductos.module.css'

export default function GridProductos() {
    return (
        <div>
            <ul>
                Lista de Productos
                <h3>Articulos</h3>
                <div className={styles.cartas}>
                    {db.productos.map((producto => (
                    <CardProductos key={producto.id} producto={producto} ></CardProductos>
                )))}
                </div>
            </ul>
        </div>
    )
}
