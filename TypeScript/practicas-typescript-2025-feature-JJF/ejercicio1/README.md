# Color de Resistencias

## Instrucciones

Si quieres construir algo usando una Raspberry Pi, probablemente usarás resistencias. 
Para este ejercicio, necesitas saber dos cosas sobre ellas:

- Cada resistencia tiene un valor de resistencia.
- Las resistencias son pequeñas, tanto que si imprimieras el valor de resistencia en ellas, sería difícil de leer.

Para solucionar este problema, los fabricantes imprimen bandas codificadas por colores en las resistencias para indicar sus valores de resistencia.
Cada banda tiene una posición y un valor numérico.

Las primeras 2 bandas de una resistencia tienen un esquema de codificación simple: cada color se mapea a un solo número.

En este ejercicio, vas a crear un programa útil para que no tengas que recordar los valores de las bandas.

Estos colores se codifican de la siguiente manera:

- Black: 0
- Brown: 1
- Red: 2
- Orange: 3
- Yellow: 4
- Green: 5
- Blue: 6
- Violet: 7
- Grey: 8
- White: 9

El objetivo de este ejercicio es crear una forma de:

- Buscar el valor numérico asociado a una banda de color en particular. 
- Listar los diferentes colores de las bandas.

Las mnemotécnicas mapean los colores a los números que, cuando se almacenan como un array, coinciden con su índice en el array: Better Be Right Or Your Great Big Values Go Wrong.

Puedes encontrar más información sobre la codificación de colores de las resistencias en el artículo de Wikipedia [Electronic color code](https://en.wikipedia.org/wiki/Electronic_color_code)