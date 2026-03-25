export function erupt(x: number, y: number, canvas: string[][], volcan: number[][]): string[][] {


  //funcion recursiva para pintar el volcan nuevo
  function isEruptionPoint(row: number, col: number): void {

    canvas[row][col] = "*"; //punto de erupcion con un *
    const currentHeight = volcan[row][col]; //altura ACTUAL del volcan

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
        
        //si la altura del volcan original es menor q la la de ahora entonces puede erupcionar
        if (volcan[newRow][newCol] > currentHeight) {
          isEruptionPoint(newRow, newCol);
        }
      }
    }

  }
  
  isEruptionPoint(x, y);

  addColor(canvas).forEach((row) => {
   console.log(row.join(''))
  });


  return canvas;
}

export function addColor(table: string[][]): string[][] {

 const colors: {[key: string]: string } = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  };
  return table.map(row => row.map(cell => {
    if (cell === '*') {
      return colors.red + cell + "\x1b[0m"; //pintar de rojo 
    } else {
      return colors.green + cell + "\x1b[0m"; //pintar de verde el resto
    }
  }));
}