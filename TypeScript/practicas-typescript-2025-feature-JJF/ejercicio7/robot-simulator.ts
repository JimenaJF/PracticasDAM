export class InvalidInputError extends Error {

   message: string;

  constructor(message: string) {
    super()
    this.message = message || 'Invalid Input'
  }
}

type Direction = 'north' | 'east' | 'south' | 'west'
type Coordinates = [number, number]


export class Robot {

  private _bearing: Direction
  private _coordinates: Coordinates

  constructor() {
    this._bearing = 'north'
    this._coordinates = [0, 0]
  }

  get bearing(): Direction {
    return this._bearing;

  }

  get coordinates(): Coordinates {
    return this._coordinates
  }

  place({ x, y, direction }: { x: number; y: number; direction: string }) {

    if (!['north', 'east', 'south', 'west'].includes(direction)) { //si la dirrecion no esta en  el type dirtection, se lanza un error
      throw new InvalidInputError('dirrecion invalida, por favor use north, east, south o west')
    }else{
      this._coordinates =  [x, y]; 
      this._bearing = direction as Direction;
    }

  }

  evaluate(instructions: string) {
  
    for (const instruction of instructions) {
      switch (instruction) {
        case 'R':
          if (this._bearing === 'north'){ 
            this._bearing = 'east';}
          else if (this._bearing === 'east') {
            this._bearing = 'south';
          } else if (this._bearing === 'south') {
            this._bearing = 'west';
          } else {
            this._bearing = 'north';
          }
          break;

        case 'L':

          if (this._bearing === 'north') {
            this._bearing = 'west';
          } else if (this._bearing === 'west') {
            this._bearing = 'south';
          } else if (this._bearing === 'south') {
            this._bearing = 'east';
          } else {
            this._bearing = 'north';
          }
          break;

        case 'A':
  
          let [x, y] = this._coordinates;

          if (this._bearing === 'north'){ 
            y++;
          }else if (this._bearing === 'south') {
            y--;
          }else if (this._bearing === 'east'){ 
            x++;
          }else{
          x--;
          }   
          this._coordinates = [x, y];
           break;

          default:
            throw new InvalidInputError(`Intruccion invalida: ${instruction}`);
      }
    } 
  
  }

}

