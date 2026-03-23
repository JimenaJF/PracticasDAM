# Volcano

## Instrucciones

Este ejercicio no es obligatorio, pero servirá para ir un poco más allá y a ver si alguien lo resuelve.

Simula la lava de un volcan. Tienes una matriz de numeros enteros que simula la altura de las parcelas de una montaña. La lava comenzara a salir por un punto dado sus coordenadas. Cualquier punto adyacente de menor altura tambien quedara inundado. Representar el nuevo mapa con dos caracteres: '*' para las zonas inundadas y '-' para el resto de zonas.

Adicionalmente, añadir color al nuevo mapa, rojo para la lava y verde para el resto. Investigar como se pueden cambiar los colores que muestra la consola en JavaScript/TypeScript. No usar bibliotecas adicionales para esta tarea.

Se valorara la claridad en el codigo, la documentación y el uso de nomenclatura en inglés.

## NOTAS

Se puede usar la matriz siguiente

const volcan: number[][] = [
    [1, 2, 3, 4, 5, 6],
    [6, 5, 4, 3, 2, 1],
    [4, 3, 2, 5, 5, 1],
    [5, 4, 8, 2, 4, 4],
    [7, 9, 2, 4, 5, 2]
]
const canvas: string[][] = volcan.map(row => row.map(() => '-'))

Para poder probarlo en local se puede hacer añadiendo esto al final:


addColor(erupt(2, 3, canvas, volcan)).forEach((row) => {
    console.log(row.join(''))
})

Para ejecutarlo en local, debeis instalar el paquete ts-node y añadir esto a la sección de scripts del package.json
"dev": "ts-node volcano.ts",
 
Luego lo ejecutais con yarn dev
