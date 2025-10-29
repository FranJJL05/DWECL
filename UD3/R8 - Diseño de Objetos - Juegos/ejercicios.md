# EJERCICIOS – DEFINICIÓN DE OBJETOS POR EL USUARIO

---

## 1 Puzzle

La clase Puzzle se centra en la gestión del tablero, el movimiento del hueco y el control del estado del juego.

**constructor(dimension)**  
-> *Método constructor.*  
Inicializa el tablero y las variables de estado (movimientos, tiempo) según la dimensión.  
**No devuelve nada.**

**generarTableroAleatorio()**  
-> *Método.*  
Crea un tablero desordenado con piezas poniendo el `0` como hueco vacío. Se asegura de que el puzzle sea resoluble.  
**No devuelve nada.**

**mover(direccion)**  
-> *Método.*  
Mueve el hueco (0) en la dirección indicada (`arriba`, `abajo`, `izquierda`, `derecha`) si es posible.  
**Devuelve:** `true` si el movimiento fue válido, `false` si no lo fue.

**estaResuelto()**  
-> *Método.*  
Comprueba si el tablero está en el orden correcto (de `1` a `N²-1`, con el `0` al final).  
**Devuelve:** `true` si el puzzle está resuelto, `false` en caso contrario.

**obtenerTiempoTranscurrido()**  
-> *Método.*  
Calcula el tiempo total desde que se inició la partida.  
**Devuelve:** el tiempo transcurrido en segundos.

**dibujar()**  
-> *Método.*  
Muestra el estado actual del tablero y los movimientos en la consola.  
**No devuelve nada.**

---

## 2 Tres en Raya

La clase TresEnRaya gestiona el turno de los jugadores y la detección de una línea ganadora.

**constructor()**  
-> *Método constructor.*  
Crea el tablero `3x3` vacío y establece el primer jugador ('X').  
**No devuelve nada.**

**marcarCasilla(fila, columna)**  
-> *Método.*  
Coloca la marca del jugador actual ('X' o 'O') si la casilla está libre.  
**Devuelve:** `true` si se marcó correctamente, `false` si la casilla ya estaba ocupada.

**comprobarGanador()**  
-> *Método.*  
Revisa si hay tres marcas iguales en línea (horizontal, vertical o diagonal).  
**Devuelve:** `'X'`, `'O'` si hay ganador, o `null` si aún no hay.

**cambiarTurno()**  
-> *Método.*  
Cambia el turno entre los jugadores ('X' ↔ 'O').  
**No devuelve nada.**

**dibujar()**  
-> *Método.*  
Muestra el tablero en la consola con las marcas actuales.  
**No devuelve nada.**

---

## 3 OPCIONAL: IA del Tres en Raya

El método de la IA se basa en una estrategia para simular inteligencia en el juego.

**jugarIA()**  
-> *Método.*  
Elige el mejor movimiento para la máquina ('O') siguiendo prioridades.  
**Devuelve:** las coordenadas (fila, columna) donde juega la IA.

**Prioridades:**
1. **Ganar:** si puede ganar en un movimiento, lo hace.  
2. **Bloquear:** si el rival puede ganar, lo bloquea.  
3. **Estrategia:** prefiere el centro y luego las esquinas.  
4. **Aleatorio:** si no hay jugadas críticas, elige una al azar.

---

## 4 Buscaminas

La clase Buscaminas usa dos tableros (contenido y estado) y la lógica de propagación de casillas.

**constructor()**  
-> *Método constructor.*  
Crea los tableros `8x8` y configura las minas y los números.  
**No devuelve nada.**

**colocarMinas()**  
-> *Método.*  
Coloca aleatoriamente 10 minas ('M') en el tablero de contenido.  
**No devuelve nada.**

**calcularNumeros()**  
-> *Método.*  
Rellena las casillas sin minas con el número de minas vecinas (0–8).  
**No devuelve nada.**

**contarMinasVecinas(f, c)**  
-> *Método.*  
Cuenta cuántas minas hay alrededor de una posición dada.  
**Devuelve:** un número entre `0` y `8`.

**descubrirCasilla(f, c)**  
-> *Método.*  
Muestra el contenido de una casilla. Si hay una mina, el juego termina. Si es `0`, se destapan sus vecinas.  
**Devuelve:** `true` si la casilla era segura, `false` si había una mina.

**propagacionCeros(f, c)**  
-> *Método.*  
Destapa automáticamente todas las casillas vacías conectadas (con valor `0`).  
**No devuelve nada.**

**obtenerTiempoRestante()**  
-> *Método.*  
Calcula el tiempo restante antes de que se acabe la partida.  
**Devuelve:** los segundos restantes.

**dibujar()**  
-> *Método.*  
Muestra el tablero actual en la consola (con símbolos ?, número o *).  
**No devuelve nada.**
