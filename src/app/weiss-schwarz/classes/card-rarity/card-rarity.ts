import {Card} from "../card/card";
import {Rarity} from "../rarity/rarity";

export class CardRarity {
  private readonly commonUrl = '/static/weiss-schwarz/layouts/inserts'

  constructor(
    public pk: number,
    public card: Card,
    public rarity: Rarity,
    public cardNumberPhysical: string,
  ) {
  }

  get lowerLayout(): string {
    let type: string = this.card.type.name.toString().toLowerCase()
    let colour: string = this.card.colour.name.toString().toLowerCase()
    let side: string
    if (this.card.release.schwarz && this.card.release.weiss) {
      throw "Side Weiss Schwarz is not implemented"
    } else if (this.card.release.schwarz) {
      side = 'schwarz'
    } else if (this.card.release.weiss) {
      side = 'weiss'
    } else {
      throw "Non side is not implemented"
    }

    return `${this.commonUrl}/${side}/${type}/${colour}.png`
  }
}
