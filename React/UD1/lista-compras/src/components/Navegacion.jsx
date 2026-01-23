import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      {/* Este abrirá RecetaPasta y mostrará "PASTA" */}
      <Link to="/receta/pasta">Pasta</Link>

      {/* Este TAMBIÉN abrirá RecetaPasta pero mostrará "PIZZA" */}
      <Link to="/receta/pizza">Pizza</Link>

      <Link to="/grid">Grid</Link>
    </nav>
  );
}

export default Navegacion;