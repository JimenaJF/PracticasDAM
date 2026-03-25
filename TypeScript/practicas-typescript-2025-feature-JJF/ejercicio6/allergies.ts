export class Allergies {

  allergenIndex: unknown

  constructor(allergenIndex: unknown) {
    this.allergenIndex = allergenIndex;
  }

  public list(): unknown {
    
    const allergens: unknown[] = [
      "eggs",
      "peanuts", 
      "shellfish", 
      "strawberries", 
      "tomatoes", 
      "chocolate", 
      "pollen", 
      "cats"
    ];

    
    if (typeof this.allergenIndex === "number") {
      return allergens.filter((allergen: unknown, i: number) =>
        ((this.allergenIndex as number) & (1 << i)) !== 0
      );
    }

    return [];

  }

  public allergicTo(allergen: unknown): unknown {
    
    if (typeof allergen === "string") {
      const list = this.list();
      
      if(Array.isArray(list)) {
        return list.includes(allergen);
      }
      
    }

    return false;
  }
}
