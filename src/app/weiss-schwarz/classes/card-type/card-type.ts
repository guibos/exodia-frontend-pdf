import {CardTypeEnum} from "./card-type-enum";
import {TwoDimensionalMeasurements} from "../two-dimensional-measurements/two-dimensional-measurements";
import {CardSizes} from "../card-sizes/card-sizes";
import {DimensionalMeasurement} from "../dimensional-measurement/dimensional-measurement";

export class CardType {
  constructor(
    public id: number,
    public name: CardTypeEnum
  ) {
  }
  public get cardSizes(): CardSizes{
    let border = new DimensionalMeasurement(4, 'mm')
    if ([CardTypeEnum.Character, CardTypeEnum.Event].includes(this.name)){
      return new CardSizes(
        new TwoDimensionalMeasurements(
          new DimensionalMeasurement(8.8, 'cm'),
          new DimensionalMeasurement(6.3, 'cm'),
        ),
        new DimensionalMeasurement(4.5, 'cm'),
        border
      )
    } else {
      return new CardSizes(
        new TwoDimensionalMeasurements(
          new DimensionalMeasurement(6.3, 'cm'),
          new DimensionalMeasurement(8.8, 'cm'),
        ),
        new DimensionalMeasurement(2, 'cm'),
        border
      )
    }

  }
}
