# Etl

## Instrucciones

Vamos a realizar la etapa de Transformación (Transform) de un proceso Extract-Transform-Load.

## ETL

Extract-Transform-Load (ETL) es una forma elegante de decir: "Tenemos algunos datos antiguos y desordenados en este sistema, 
y ahora los necesitamos en este nuevo y brillante sistema, así que vamos a migrarlos".

(Típicamente, esto se sigue de "Solo necesitaremos ejecutar esto una vez". 
Esto suele ir seguido de muchos golpes en la frente y lamentos sobre lo estúpidos que podemos ser).

## El objetivo

Vamos a extraer algunas puntuaciones de Scrabble de un sistema antiguo.

El antiguo sistema almacenaba una lista de letras por puntuación:

- 1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
- 2 points: "D", "G",
- 3 points: "B", "C", "M", "P",
- 4 points: "F", "H", "V", "W", "Y",
- 5 points: "K",
- 8 points: "J", "X",
- 10 points: "Q", "Z",

El nuevo y brillante sistema de Scrabble almacena la puntuación por letra, lo que
lo hace mucho más rápido y fácil de calcular la puntuación de una palabra.
También almacena las letras en minúsculas independientemente de si se escriben en mayúsculas o minúsculas:

- "a" is worth 1 point.
- "b" is worth 3 points.
- "c" is worth 3 points.
- "d" is worth 2 points.
- Etc.

Su misión, si decide aceptarla, es transformar el formato de datos 
heredado al nuevo y reluciente formato.

## Notas

Una nota final sobre la puntuación, Scrabble se juega en todo el mundo en una variedad de 
idiomas, cada uno con su propia tabla de puntuación única. Por ejemplo, una "E" tiene una 
puntuación de 2 en la versión del juego en idioma maorí mientras que tiene una puntuación 
de 4 en la versión del juego en idioma hawaiano.