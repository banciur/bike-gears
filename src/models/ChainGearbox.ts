import { IGearbox } from "./IGearbox";
import { Gearbox } from "./Gearbox";

export class ChainGearbox implements IGearbox {
  private readonly gears: [string, [number, number], number][] = [];
  readonly length: number;

  constructor(frontGears: number[], rearGears: number[], forbiddenGears: string[]) {
    const front = new Gearbox(frontGears);
    const rear = new Gearbox(rearGears, false);

    for (let f = 0; f < front.length; f++) {
      for (let r = 0; r < rear.length; r++) {
        const gearIndex = `${f + 1}-${r + 1}`;
        if (!forbiddenGears.includes(gearIndex)) {
          this.gears.push([gearIndex, [front.getRatio(f), rear.getRatio(r)], front.getRatio(f) / rear.getRatio(r)]);
        }
      }
    }

    this.length = this.gears.length;
  }

  [Symbol.iterator](): Iterator<number> {
    return this.gears.map(gear => gear[2])[Symbol.iterator]();
  }

  getRatio(index: number): number {
    return this.gears[index][2];
  }
}
