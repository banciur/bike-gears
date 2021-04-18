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
    this.forbiddenGears = forbiddenGears.sort(this.forbiddenGearsSorter);

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
    return this.gears.map((gear) => gear[2])[Symbol.iterator]();
  }

  getRatio(index: number): number {
    return this.gears[index][2];
  }

  // TODO: could use some tests here?
  private forbiddenGearsSorter = (gear1: string, gear2: string) => {
    const gear1Indexes = gear1.split("-").map((index) => Number.parseInt(index, 10));
    const gear2Indexes = gear2.split("-").map((index) => Number.parseInt(index, 10));

    const res1 = gear1Indexes[0] - gear2Indexes[0];
    if (res1 !== 0) {
      return res1;
    } else {
      return gear1Indexes[1] - gear2Indexes[1];
    }
  };
}
