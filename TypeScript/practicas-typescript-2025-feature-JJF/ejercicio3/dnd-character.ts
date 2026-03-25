export class DnDCharacter {

  strength : number;
  dexterity : number;
  constitution : number;
  intelligence : number ;
  wisdom : number ;
  charisma : number  ;
  hitpoints : number ;


  constructor() {
    this.strength = 10;
    this.dexterity = 10;
    this.constitution = 10;
    this.intelligence = 10;
    this.wisdom = 10;
    this.charisma = 10;
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    
     const dado = Math.floor(Math.random() * 6) + 1; //simulo el lanzamiento de un dado de 1 a 6 caras

     const rolls = [dado, dado, dado, dado]; //lanzo el dado 4 veces y guardo los resultados en un array

     rolls.sort((a, b) => a - b); //ordenos los resultados en orden ascendente
     rolls.shift(); //elimino el  más pequeño (el primero del array)
     const total = rolls.reduce((sum, roll) => sum + roll, 0); //suma de los 3 dados
     return total;


  }

  public static getModifierFor(abilityValue: number): number {
    //calculo del modificador
    return Math.floor((abilityValue - 10) / 2); 

  }
}
