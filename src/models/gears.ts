interface IGearBox {
  readonly length: number;
  getRatio(gear: number): number;
}

export class GearBox implements IGearBox, Iterable<number> {
  private readonly gears: number[];
  readonly length: number;

  constructor(gears: number[], ascending = true) {
    this.gears = gears.sort();
    if (!ascending) {
      this.gears.reverse();
    }
    this.length = this.gears.length;
  }

  getRatio(index: number) {
    return this.gears[index];
  }

  [Symbol.iterator](): Iterator<number> {
    return this.gears[Symbol.iterator]();
  }
}
