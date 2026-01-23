import React from "react";
import GridProductos from "../components/GridProductos";
import { useSearchParams } from "react-router-dom";



export default function ProductosPages(){
    let [searchParams] = useSearchParams();
    console.log("ProductosPage renderizado")
    console.log("Parámetros de búsqueda", searchParams.get("search"));
    return(
        <div>
            <GridProductos></GridProductos>
        </div>
    )
}