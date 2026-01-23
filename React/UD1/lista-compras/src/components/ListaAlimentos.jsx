function ListaAlimentos({ lista }) {
  if (lista.length === 0) {
    return <p style={{ textAlign: 'center', color: '#888' }}>La lista está vacía.</p>;
  }

  return (
    <ul style={estilos.lista}>
      {lista.map((item, index) => (
        <li key={index} style={estilos.item}>
          {/* Mostramos la cantidad en negrita y luego el nombre */}
          <span style={estilos.cantidad}>{item.cantidad} x </span> 
          <span>{item.nombre}</span>
        </li>
      ))}
    </ul>
  );
}

const estilos = {
  lista: { listStyle: 'none', padding: 0 },
  item: { 
    background: '#2c2c2c', // Fondo tarjeta oscuro
    color: '#ffffff',      // Texto blanco (¡Arreglado el problema de la imagen!)
    border: '1px solid #444', 
    margin: '8px 0',
    padding: '15px', 
    fontSize: '18px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center'
  },
  cantidad: {
    fontWeight: 'bold',
    color: '#00d664', // Ponemos la cantidad en verde para resaltar
    marginRight: '10px'
  }
};

export default ListaAlimentos;