import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CardRarity} from "../../../classes/card-rarity/card-rarity";
import {CardTypeEnum} from "../../../classes/card-type/card-type-enum";

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() cardRarity!: CardRarity;
  @HostBinding("style.--height") height: string = '';
  @HostBinding("style.--width") width: string = '';
  @HostBinding("style.--contentHeight") contentHeight: string = '';
  @HostBinding("style.--contentWidth") contentWidth: string = '';
  @HostBinding("style.--image") image: string = '';
  @HostBinding("style.--transform") transform: string | null = null;


  constructor() {

  }

  ngOnInit(): void {
    this.image = `url(${this.cardRarity.imageJp})`
    this.contentHeight = this.cardRarity.card.cardType.cardSizes.card.height.cssValue
    this.contentWidth = this.cardRarity.card.cardType.cardSizes.card.width.cssValue

    if (this.cardRarity.card.cardType.name == CardTypeEnum.Climax){
      this.height = this.cardRarity.card.cardType.cardSizes.card.width.cssValue
      this.width = this.cardRarity.card.cardType.cardSizes.card.height.cssValue
      this.transform = `rotate(90deg)`
    } else {
      this.height = this.cardRarity.card.cardType.cardSizes.card.height.cssValue
      this.width = this.cardRarity.card.cardType.cardSizes.card.width.cssValue
    }

  }

}
