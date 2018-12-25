import { IGearbox } from "./IGearbox";

export class Gearbox implements IGearbox {
  private readonly gears: number[];
  readonly length: number;
  readonly ascending: boolean;

  constructor(gears: number[], ascending = true) {
    gears.sort((a, b) => a - b);
    if (!ascending) {
      gears.reverse();
    }
    this.gears = [...new Set(gears)];
    this.length = gears.length;
    this.ascending = ascending;
  }

  getRatio(index: number) {
    return this.gears[index];
  }

  [Symbol.iterator](): Iterator<number> {
    return this.gears[Symbol.iterator]();
  }
}
