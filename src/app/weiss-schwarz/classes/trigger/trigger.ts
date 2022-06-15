import {TriggerEnum} from "./trigger-enum";

export class Trigger {
  constructor(
    public id: number,
    public name: TriggerEnum
  ) {
  }
}
