import {Release} from "../release/release";
import {TitleCode} from "../title-code/title-code";
import {Rarity} from "../rarity/rarity";
import {Colour} from "../colour/colour";
import {ReleaseType} from "../release-type/release-type";
import {Attribute} from "../attribute/attribute";
import {CardType} from "../card-type/card-type";
import {Trigger} from "../trigger/trigger";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Product} from "../product/product";


export class Card {
  public abilitiesSafe: SafeHtml
  private readonly commonUrl = '/static/weiss-schwarz/layouts'

  constructor(
    public titleCode: TitleCode,
    public product: Product,
    public cardId: number,
    public canonicalCard: boolean,
    public rarities: Rarity[],
    public cardNumber: string,
    public name: string,
    public colour: Colour,
    public soul: number,
    public attributes: Attribute[],
    public abilities: string,
    public cost: number,
    public level: number,
    public cardType: CardType,
    public power: number,
    public triggers: Trigger[],
    private sanitizer: DomSanitizer
  ) {

    this.abilitiesSafe = sanitizer.bypassSecurityTrustHtml(this.abilities)
  }


  get soulLayout(): string {
    let colour: string = this.colour.name.toString().toLowerCase()
    return `${this.commonUrl}/soul/${colour}/${this.soul}.png`
  }

  get attribute1Image(): string {
    if (this.attributes.length >= 1) {
      return `${this.commonUrl}/attributes/set/${this.product.release.maxAttributes}.png`
    } else {
      return ''
    }
  }

  get attribute2Image(): string {
    if (this.attributes.length >= 2) {
      return `${this.commonUrl}/attributes/set/${this.product.release.maxAttributes}.png`
    } else {
      return ''
    }
  }

  get attribute3Image(): string {
    if (this.attributes.length >= 3) {
      return `${this.commonUrl}/attributes/set/${this.product.release.maxAttributes}.png`
    } else {
      return ''
    }
  }

}
