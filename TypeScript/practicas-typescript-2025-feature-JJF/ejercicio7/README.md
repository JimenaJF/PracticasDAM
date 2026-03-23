# Robot Simulator

## Instructions

Escribe un simulador de robot.

Una instalación de prueba de fábrica de robots necesita un programa para verificar los movimientos de los robots.

Los robots tienen tres posibles movimientos:

- turn right
- turn left
- advance

Los robots se colocan en una cuadrícula infinita hipotética, mirando en una dirección particular 
(norte, este, sur u oeste) en un conjunto de coordenadas {x, y}, por ejemplo, {3,8}, 
con las coordenadas aumentando hacia el norte y el este.

El robot luego recibe una serie de instrucciones, momento en el que la instalación 
de prueba verifica la nueva posición del robot y en qué dirección está mirando.

- La cadena de letras "RAALAL" significa:
  - Turn right
  - Advance twice
  - Turn left
  - Advance once
  - Turn left yet again
- Supongamos que un robot comienza en {7, 3} mirando hacia el norte. 
Entonces, ejecutar esta serie de instrucciones debería dejarlo en {9, 4} mirando hacia el oeste.