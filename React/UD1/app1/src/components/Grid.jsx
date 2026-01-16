import React from 'react'
import Card from './Card'
import db from '../db/db.json'

export default function Grid() {
  const arProductos = ["Producto1", "Producto2", "Producto3"]
  console.log(db.productos);
  return (
    <div>
      <ul>
        Lista de arProductos
        {db.productos.map((producto => (
          <Card key={producto.id} producto={producto} ></Card>
        )))}
      </ul>
    </div>
  )
}
