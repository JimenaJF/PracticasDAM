# Alergias

## Instructions

Dado el puntaje de alergia de una persona, determina si son alérgicos o no a un elemento dado, y su lista completa de alergias.

Una prueba de alergia produce un único puntaje numérico que contiene información sobre 
todas las alergias que la persona tiene (para las que se les hizo la prueba).

La lista de elementos (y su valor) que se sometieron a prueba son:

- eggs (1)
- peanuts (2)
- shellfish (4)
- strawberries (8)
- tomatoes (16)
- chocolate (32)
- pollen (64)
- cats (128)

Entonces, si Tom es alérgico a los cacahuetes y al chocolate, obtiene un puntaje de 34.

Ahora, dado solo ese puntaje de 34, tu programa debería ser capaz de decir:

- Si Tom es alérgico a alguno de esos alérgenos mencionados anteriormente.
- Todas las alergias a las que Tom es alérgico.

Nota: un puntaje dado puede incluir alérgenos que **not** se mencionan anteriormente 
(es decir, alérgenos que puntúan 256, 512, 1024, etc.). Tu programa debe ignorar 
esas componentes del puntaje. Por ejemplo, si el puntaje de alergia es 257, tu programa 
solo debe informar sobre la alergia a los eggs (1).