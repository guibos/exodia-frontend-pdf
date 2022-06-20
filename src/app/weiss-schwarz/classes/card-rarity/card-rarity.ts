import {Card} from "../card/card";
import {Rarity} from "../rarity/rarity";

export class CardRarity {
  private readonly commonUrl = '/static/weiss-schwarz/layouts/inserts'

  constructor(
    public pk: number,
    public card: Card,
    public rarity: Rarity,
    public cardNumberPhysical: string,
    public imageEn: string,
    public imageJp: string
  ) {
  }

  get lowerLayout(): string {
    let type: string = this.card.cardType.name.toString().toLowerCase()
    let colour: string = this.card.colour.name.toString().toLowerCase()
    let side: string
    if (this.card.product.release.schwarz && this.card.product.release.weiss) {
      throw "Side Weiss Schwarz is not implemented"
    } else if (this.card.product.release.schwarz) {
      side = 'schwarz'
    } else if (this.card.product.release.weiss) {
      side = 'weiss'
    } else {
      throw "Non side is not implemented"
    }

    return `${this.commonUrl}/${side}/${type}/${colour}.png`
  }
}
