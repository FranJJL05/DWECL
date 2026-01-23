import { useState } from 'react';
import Formulario from './Formulario';
import ListaAlimentos from './ListaAlimentos';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navegacion from './Navegacion';


function App() {
    const [alimentos, setAlimentos] = useState([]);

    const agregarNuevoAlimento = (nuevoItem) => {
        // nuevoItem ahora es un objeto { nombre: "...", cantidad: "..." }
        setAlimentos([...alimentos, nuevoItem]);
    };

    return (
        <>
            <div style={estilos.contenedor}>
                <h1 style={estilos.titulo}>Lista de Compras 🛒</h1>

                <Formulario agregarAlimento={agregarNuevoAlimento} />
                <ListaAlimentos lista={alimentos} />
            </div>

        </>
    );
}

const estilos = {
    contenedor: {
        maxWidth: '500px',
        margin: '50px auto',
        fontFamily: 'Arial, sans-serif',
        padding: '25px',
        backgroundColor: '#1e1e1e', // Tarjeta gris oscura
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
        borderRadius: '10px',
        border: '1px solid #333'
    },
    titulo: {
        textAlign: 'center',
        color: '#ffffff', // Título blanco
        marginBottom: '25px'
    }
};

export default App;