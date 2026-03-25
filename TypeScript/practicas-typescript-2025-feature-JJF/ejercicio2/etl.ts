export function transform(old: { [key: string]: string[] }): Record<string, number> {
 
  const newObject: { [key: string]: number } = {}
  
  for (const key in old) { //itero sobre las claves del objeto original
    const letters = old[key]; //obtengo el array de letras asociadoa a la clave actual

    for (const letter of letters) { //itero sobre cada letra del array de letras
      const lowerLetter = letter.toLowerCase() //convierto la letra a minúscula
      const value = parseInt(key); // convierto la clave actual a un número entero
      newObject[lowerLetter] = value; //asigno el valor numérico a la letra minúscula en el nuevo objeto

    }
  }
  return newObject;
  
}
