import { IGearbox } from "./IGearbox";
import { Gearbox } from "./Gearbox";

export class ChainGearbox implements IGearbox {
  readonly gears: [string, [number, number], number][] = [];
  readonly length: number;
  readonly frontGears: Gearbox;
  readonly rearGears: Gearbox;
  readonly forbiddenGears: string[];

  constructor(frontGears: number[], rearGears: number[], forbiddenGears: string[]) {
    this.frontGears = new Gearbox(frontGears);
    this.rearGears = new Gearbox(rearGears, false);
    this.forbiddenGears = forbiddenGears;

    for (let f = 0; f < this.frontGears.length; f++) {
      for (let r = 0; r < this.rearGears.length; r++) {
        const gearIndex = `${f + 1}-${r + 1}`;
        if (!forbiddenGears.includes(gearIndex)) {
          this.gears.push([
            gearIndex,
            [this.frontGears.getRatio(f), this.rearGears.getRatio(r)],
            this.frontGears.getRatio(f) / this.rearGears.getRatio(r),
          ]);
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
