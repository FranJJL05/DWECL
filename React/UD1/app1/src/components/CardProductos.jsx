import React from "react";
import styles from './CardProductos.module.css'

export default function CardProductos({ producto }) {
    return (
        <div className={styles.cajas}>
            <div className={styles.caja}>
                <img src={producto.image} alt="imagen" />
                <p><b>{producto.title}</b></p>
                <p>Precio: {producto.price}</p>
            </div>
        </div>
    );
}
