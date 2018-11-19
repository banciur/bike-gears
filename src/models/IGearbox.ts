export interface IGearbox extends Iterable<number> {
  readonly length: number;
  getRatio(index: number): number;
}
