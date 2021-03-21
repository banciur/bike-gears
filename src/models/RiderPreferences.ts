export class RiderPreferences {
  minCadence: number;
  maxCadence: number;

  constructor(minCadence: number, maxCadence: number) {
    this.minCadence = minCadence;
    this.maxCadence = maxCadence;
  }
}
