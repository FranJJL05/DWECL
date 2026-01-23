import { useState } from 'react';

function Formulario({ agregarAlimento }) {
  // Ahora necesitamos dos estados
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    // Validamos que ambos campos tengan algo escrito
    if (nombre.trim() && cantidad.trim()) {
      // Creamos un objeto con los dos datos
      const nuevoItem = {
        nombre: nombre,
        cantidad: cantidad
      };
      
      agregarAlimento(nuevoItem);
      
      // Limpiamos ambos inputs
      setNombre('');
      setCantidad('');
    }
  };

  return (
    <form onSubmit={manejarEnvio} style={estilos.form}>
      
      <div style={estilos.campo}>
        <label htmlFor="alimento" style={estilos.label}>Alimento:</label>
        <input
          id="alimento"
          type="text"
          placeholder="Ej: Leche"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={estilos.input}
        />
      </div>

      <div style={estilos.campo}>
        <label htmlFor="cantidad" style={estilos.label}>Cantidad:</label>
        <input
          id="cantidad"
          type="number"
          placeholder="Ej: 2"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          style={estilos.input}
        />
      </div>

      <button type="submit" style={estilos.boton}>
        Añadir
      </button>
    </form>
  );
}

const estilos = {
  form: { 
    display: 'flex', 
    flexDirection: 'column', // Ponemos los elementos uno debajo del otro
    gap: '15px', 
    marginBottom: '20px' 
  },
  campo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    color: '#ffffff', // Importante: Texto blanco para que se lea
    fontSize: '14px',
    fontWeight: 'bold'
  },
  input: { 
    padding: '10px', 
    fontSize: '16px', 
    borderRadius: '5px', 
    border: '1px solid #555', 
    backgroundColor: '#2c2c2c', // Fondo input oscuro
    color: '#ffffff' // Texto input blanco
  },
  boton: { 
    padding: '12px', 
    marginTop: '10px',
    background: '#00d664', 
    color: '#000', 
    fontWeight: 'bold',
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer' 
  }
};

export default Formulario;