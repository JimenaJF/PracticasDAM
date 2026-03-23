# Personaje de DnD

## Instructions

Para un juego de [Dungeons & Dragons][dnd], cada jugador comienza generando un personaje 
con el que puede jugar. Este personaje tiene, entre otras cosas, seis habilidades: 
fuerza, destreza, constitución, inteligencia, sabiduría y carisma. 
Estas seis habilidades tienen puntajes que se determinan al azar. 
Para hacer esto, lanzas cuatro dados de seis caras y registras la suma de los tres dados más grandes. 
Lo haces seis veces, una vez para cada habilidad.

Los puntos de golpe iniciales de tu personaje son 10 + el modificador de constitución de tu personaje. 
Encuentras el modificador de constitución de tu personaje restando 10 de la constitución de tu personaje, 
dividiendo por 2 y redondeando hacia abajo.

Escribe un generador de personajes aleatorios que siga las reglas anteriores.

Por ejemplo, los seis lanzamientos de cuatro dados pueden verse así:

- 5, 3, 1, 6: You discard the 1 and sum 5 + 3 + 6 = 14, which you assign to strength.
- 3, 2, 5, 3: You discard the 2 and sum 3 + 5 + 3 = 11, which you assign to dexterity.
- 1, 1, 1, 1: You discard the 1 and sum 1 + 1 + 1 = 3, which you assign to constitution.
- 2, 1, 6, 6: You discard the 1 and sum 2 + 6 + 6 = 14, which you assign to intelligence.
- 3, 5, 3, 4: You discard the 3 and sum 5 + 3 + 4 = 12, which you assign to wisdom.
- 6, 6, 6, 6: You discard the 6 and sum 6 + 6 + 6 = 18, which you assign to charisma.

Como la constitución es 3, el modificador de constitución es -4 y los puntos de golpe son 6.

## Notas

La mayoría de los lenguajes de programación tienen generadores de (pseudo)aleatorios, 
pero pocos están diseñados para tirar dados. Uno de esos lenguajes es [Troll].

[dnd]: https://en.wikipedia.org/wiki/Dungeons_%26_Dragons
[troll]: http://hjemmesider.diku.dk/~torbenm/Troll/