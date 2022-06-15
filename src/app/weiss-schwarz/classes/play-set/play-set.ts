import {CardRarity} from "../card-rarity/card-rarity";

export class PlaySet {
  constructor(
    public cardRarity: CardRarity,
    public copies: number,
  ) {
  }
}
