export function erupt(x: number, y: number, canvas: string[][], volcan: number[][]): string[][] {
  const visited = new Set<string>(); 


  //funcion recursiva para pintar el volcan nuevo
  function isEruptionPoint(row: number, col: number): void {

    const coordKey = `${row},${col}`;
    if (visited.has(coordKey)) return;

    visited.add(coordKey);

    canvas[row][col] = "*"; //punto de erupcion con un *
    const currentHeight = volcan[row][col]; //altura actual del volcan
    

    //validar los numeros de al lado
    const directions = [
      [0, 1], //derecha
      [-1, 0], //arriba
      [0, -1], //izquierda
      [1, 0], //abajo
    
    ];
    for (const [directionsRow, directionsCol] of directions) {

      const newRow = row + directionsRow;  //nueva fila 
      const newCol = col + directionsCol; // nueva columna

      //validar que esas filas existan no se salgan del canvas
      if (newRow >= 0 && newRow < canvas.length && newCol >= 0 && newCol < canvas[0].length) { //validacion de IndexOutOfBounds
        
        //si la altura del volcan original es menor q a la de ahora entonces puede erupcionar
        if (volcan[newRow][newCol] < currentHeight) {
          isEruptionPoint(newRow, newCol);
        }
      }
    }

  }
  
  isEruptionPoint(x, y);

  //addColor(canvas).forEach((row) => {
    //console.log(row.join(''))
  //});


  return canvas;
}

export function addColor(table: string[][]): string[][] {

 const colors: {[key: string]: string } = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  };
  const colorTable: string[][] = table.map(row => row.map(cell => {
    if (cell === '*') {
      return colors.red + cell + "\x1b[0m"; //pintar de rojo 
    } else {
      return colors.green + cell + "\x1b[0m"; //pintar de verde el resto
    }
    
  }));

  //console.log(colorTable.join(''));
  //console.log(colorTable.map(row => row.join(' ')).join('\n'));
  return colorTable;

  
}

 const volcan: number[][] = [
     [1, 2, 3, 4, 5, 6],
     [6, 5, 4, 3, 2, 1],
     [4, 3, 2, 5, 5, 1],
     [5, 4, 8, 2, 4, 4],
     [7, 9, 2, 4, 5, 2]
  
 ]
 
 
 const canvas: string[][] = volcan.map((row) => row.map(() => "-"));
 
 const resultado: string[][] = addColor(erupt(2, 3, canvas, volcan));
  const salida = resultado.map((row) => row.join("")).join("\n");
 
 console.log(salida);