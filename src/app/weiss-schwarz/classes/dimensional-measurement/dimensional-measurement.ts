export class DimensionalMeasurement {
  constructor(
    public size: number,
    public unit: string
  ) {
  }
  public get cssValue(): string {
    return `${this.size}${this.unit}`
  }
}
