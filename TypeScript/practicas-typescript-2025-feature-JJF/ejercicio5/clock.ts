export class Clock {
  
  hour: unknown
  minute?: unknown

  constructor(hour: unknown, minute?: unknown) {

    
    if (minute === undefined) {
      minute = 0;
    }

    if(typeof hour === 'number' && typeof minute === 'number') {

      this.hour = (24 + (hour + Math.floor(minute / 60)) % 24) % 24
      this.minute = (60 + minute % 60) % 60 
    } else {
      this.hour = 0
      this.minute = 0
    }

  }


  
public toString(): string {
  if (typeof this.hour === 'number' && typeof this.minute === 'number') {
    const h = this.hour.toString().padStart(2, '0');
    const m = this.minute.toString().padStart(2, '0');
    return `${h}:${m}`;
  }
  return "??:??";
}

  public plus(minutes: unknown): Clock {
    
    if(typeof minutes === 'number' && typeof this.minute === 'number' && typeof this.hour === 'number') {
      return new Clock(this.hour, this.minute + minutes);
    }
    return new Clock(this.hour, this.minute);
  }

  public minus(minutes: unknown): Clock {
    if(typeof minutes === 'number' && typeof this.minute === 'number' && typeof this.hour === 'number') {
      
      return new Clock(this.hour, this.minute - minutes);
    
    }

    return new Clock(this.hour, this.minute);
  }

  public equals(other: unknown): unknown {
    if(other instanceof Clock  && typeof other.hour ==='number' && typeof other.minute === 'number' && typeof this.minute === 'number' && typeof this.hour === 'number') {
      
      return this.hour === other.hour && this.minute === other.minute;
    
    }
    return false;
  }
}
