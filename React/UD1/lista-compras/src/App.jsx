import { Routes, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion';
// Importamos tu archivo nuevo
import RecetaPasta from './components/RecetaPasta'; 
import GridProductos from './components/GridProductos';
import DetalleProducto from './components/DetalleProducto';
import ProductosPage from './pages/ProductosPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navegacion />} />
        
        {/* Usamos tu componente nuevo para manejar las recetas dinámicas */}
        <Route path="/receta/:id" element={<RecetaPasta />} />
        <Route path="/grid" element={<ProductosPage />} />

        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
  )
}

export default App;