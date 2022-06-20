import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CardRarity} from "../../classes/card-rarity/card-rarity";
import {CardTypeEnum} from "../../classes/card-type/card-type-enum";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  @Input() cardRarity!: CardRarity;
  @Input() fullCard!: boolean;
  @HostBinding("style.--cardWidth") cardWidth: string = '';
  @HostBinding("style.--cardNameLeft") cardNameLeft: string = '';
  @HostBinding("style.--cardNameRight") cardNameRight: string = '';
  @HostBinding("style.--cardNameBottom") cardNameBottom: string = '';
  @HostBinding("style.--cardIdBottom") cardIdBottom: string = '';
  @HostBinding("style.--cardIdLeft") cardIdLeft: string = '';
  @HostBinding("style.--cardIdHeight") cardIdHeight: string = '';
  @HostBinding("style.--abilitiesLeft") abilitiesLeft: string = '';
  @HostBinding("style.--abilitiesRight") abilitiesRight: string = '';
  @HostBinding("style.--abilitiesBottom") abilitiesBottom: string = '';
  @HostBinding("style.--abilitiesPaddingLeft") abilitiesPaddingLeft: string = '';
  @HostBinding("style.--abilitiesPaddingRight") abilitiesPaddingRight: string = '';
  @HostBinding("style.--abilitiesPaddingBottom") abilitiesPaddingBottom: string = '';
  @HostBinding("style.--abilitiesBorderTopStyle") abilitiesBorderTopStyle: string = '';
  @HostBinding("style.--abilitiesBorderTopWidth") abilitiesBorderTopWidth: string = '';


  constructor() {

  }

  ngOnInit(): void {
    this.cardWidth = this.cardRarity.card.cardType.cardSizes.card.width.cssValue;
    this.cardIdHeight = `${this.cardRarity.card.cardType.cardSizes.card.width.size * 0.25}mm`
    this.abilitiesPaddingLeft = '0.5mm'
    this.abilitiesPaddingRight = '0.5mm'
    this.abilitiesPaddingBottom = '0.5mm'

    if (this.fullCard) {
      this.abilitiesBorderTopWidth = '0.0px'
    } else {
      this.abilitiesBorderTopWidth = '0.5px'
    }

    if (this.cardRarity.card.cardType.name == CardTypeEnum.Character) {
      this.cardNameLeft = '34.583333858267714%'
      this.cardNameRight = '20%'
      this.cardNameBottom = `${this.cardRarity.card.cardType.cardSizes.card.width.size * 1.0416666141732282}mm`
      this.cardIdBottom = `${this.cardRarity.card.cardType.cardSizes.card.width.size * 1.325}mm`
      this.cardIdLeft = '10.20833385%'
      this.abilitiesLeft = '5.0%'
      this.abilitiesRight = '5.0%'
      this.abilitiesBottom = `${this.cardRarity.card.cardType.cardSizes.card.width.size * 1.65}mm`
      this.abilitiesBorderTopStyle = 'solid'
    } else if (this.cardRarity.card.cardType.name == CardTypeEnum.Event){
      this.cardNameLeft = '34.583333858267714%'
      this.cardNameRight = '20%'
      this.cardNameBottom = `${this.cardRarity.card.cardType.cardSizes.card.width.size * 0.75}mm`
      this.cardIdBottom = `${this.cardRarity.card.cardType.cardSizes.card.width.size * 0.775}mm`
      this.cardIdLeft = '10.20833385%'
      this.abilitiesLeft = '5.0%'
      this.abilitiesRight = '5.0%'
      this.abilitiesBottom = `${this.cardRarity.card.cardType.cardSizes.card.width.size * 1.35}mm`
      this.abilitiesBorderTopStyle = 'solid'
    } else {
      this.cardNameLeft = '61%'
      this.cardNameRight = '7.5%'
      this.cardNameBottom = `${this.cardRarity.card.cardType.cardSizes.card.width.size * 0.510}mm`
      this.cardIdBottom = `${this.cardRarity.card.cardType.cardSizes.card.width.size * 0.475}mm`
      this.cardIdLeft = '43.25%'
      this.abilitiesLeft = '2.25%'
      this.abilitiesRight = '63.70%'
      this.abilitiesBottom = `${this.cardRarity.card.cardType.cardSizes.card.width.size * 0.14}mm`
      this.abilitiesBorderTopStyle = 'none'
    }
  }

}
