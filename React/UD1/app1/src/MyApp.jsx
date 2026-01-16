import React from "react";
import Pruebas from "./pages/Pruebas";

export default function MyApp() {
  const v = 6;
  console.log(`My component rendered ${v}`);
  return <div><h1>Hola mundo {v}</h1>
    <Pruebas />
  </div>;
}
