import { FaSearch } from "react-icons/fa";

function Busqueda({ manejarBusqueda }) {
  return (
    <div style={estilos.container}>
      <FaSearch color="#888" style={estilos.icono} />
      <input 
        type="text" 
        placeholder="Buscar producto..." 
        style={estilos.input}
        onChange={(e) => manejarBusqueda(e.target.value)} 
      />
    </div>
  );
}

const estilos = {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: '10px 15px',
    borderRadius: '25px',
    maxWidth: '400px',
    margin: '20px auto', // Centrado
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
  },
  input: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
    width: '100%',
    marginLeft: '10px'
  },
  icono: {
    fontSize: '18px'
  }
};

export default Busqueda;