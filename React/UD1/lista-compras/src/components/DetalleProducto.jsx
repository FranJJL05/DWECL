import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import useGet from "../hooks/useGet";

function DetalleProducto() {
  const {id} = useParams();
  const {data, cargando} = useGet(`https://fakestoreapi.com/products/` +id);

  if (cargando) {
    return (
        <div style={estilos.center}>
            <FaSpinner size={50} className="spinner-animado" color="#007bff"/>
            <style>{`.spinner-animado { animation: spin 1s linear infinite; } @keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
        </div>
    );
  }

  const producto = data[0];

  return (
    <div style={estilos.contenedor}>
      <button style={estilos.botonVolver} onClick={() => window.location.href = "/grid"}>Volver</button>
      
      <div style={estilos.cardDetalle}>
        <img src={producto.image} alt={producto.title} style={estilos.img} />
        <div style={estilos.info}>
            <h2>{producto.title}</h2>
            <p style={estilos.categoria}>Categoría: {producto.category}</p>
            <p>{producto.description}</p>
            <h3 style={estilos.precio}>Precio: ${producto.price}</h3>
        </div>
      </div>
    </div>
  );
}

const estilos = {
  center: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' },
  contenedor: { padding: '40px', fontFamily: 'Arial, sans-serif' },
  botonVolver: { marginBottom: '20px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px' },
  cardDetalle: { display: 'flex', gap: '40px', border: '1px solid #ddd', padding: '40px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' },
  img: { width: '300px', objectFit: 'contain' },
  info: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  precio: { fontSize: '28px', color: '#2ecc71', marginTop: '20px' },
  categoria: { fontStyle: 'italic', color: '#555' }
}

export default DetalleProducto;