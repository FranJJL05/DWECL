import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import DetalleProducto from "./DetalleProducto";
import useGet from "../hooks/useGet";
import Busqueda from "./Busqueda";

function GridProductos() {
  // const [datos, setDatos] = useState([]);
  // const [cargando, setCargando] = useState(true);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDatos(data);
  //       setCargando(false);
  //     });
  // }, []);

  const {data, cargando} = useGet("https://fakestoreapi.com/products");

  if (cargando) {
    return (
      <div style={estilos.loadingContainer}>
        <FaSpinner size={50} color="#007bff" className="spinner-animado" />
        <p>Cargando productos...</p>
        <style>{`
          .spinner-animado { animation: spin 1s linear infinite; }
          @keyframes spin { 100% { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return (
    <div style={estilos.contenedor}>
      <Busqueda manejarBusqueda={(texto) => window.location.href = `http://localhost:5173/grid/`}></Busqueda>
      <h1>Lista de Productos</h1>
      <div style={estilos.grid}>
        {data.map((item) => (
          <div style={estilos.card} key={item.id}>
            <img style={estilos.img} src={item.image} alt={item.title} />
            <p style={estilos.titulo}>{item.title.substring(0, 30)}...</p>
            <strong style={estilos.precio}>${item.price}</strong>
            
            <button 
                style={estilos.boton} 
                onClick={() => window.location.href = `/producto/${item.id}`}
            >
                Ver Detalle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const estilos = {
  contenedor: { textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' },
  grid: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' },
  card: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
    border: '1px solid #e1e1e1', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '200px', height: '350px', padding: '15px', backgroundColor: '#fff' // Aumenté un poco la altura
  },
  img: { width: '100px', height: '120px', objectFit: 'contain', marginBottom: '10px' },
  titulo: { fontSize: '14px', margin: '5px 0', color: '#333' },
  precio: { fontSize: '18px', color: '#2ecc71' },
  loadingContainer: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '20px', color: '#555' },
  
  // Nuevo estilo para el botón
  boton: {
      marginTop: '10px',
      padding: '8px 15px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
  }
}

export default GridProductos;