import { useParams, Link } from "react-router-dom";

function RecetaPasta() {
  // Capturamos el dato de la URL
  const { id } = useParams();

  return (
    <div>
      {/* Mostramos el nombre dinámicamente */}
      <h1>Receta de: {id.toUpperCase()}</h1>
      
      {id === 'pasta' ? (
        <p>🍝 Aquí van los pasos específicos para hacer pasta...</p>
      ) : (
        <p>Esta es la página genérica para el plato: {id}</p>
      )}

      <br />
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default RecetaPasta;