import {TwoDimensionalMeasurements} from "../two-dimensional-measurements/two-dimensional-measurements";
import {DimensionalMeasurement} from "../dimensional-measurement/dimensional-measurement";

export class CardSizes {
  constructor(
    public card: TwoDimensionalMeasurements,
    public insert: DimensionalMeasurement,
    public border: DimensionalMeasurement
  ) { }
}
