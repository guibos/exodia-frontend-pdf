import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CardRarity} from "../../../classes/card-rarity/card-rarity";

@Component({
  selector: 'app-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.css']
})
export class CardFrontComponent implements OnInit {
  @Input() cardRarity!: CardRarity;
  @HostBinding("style.--height") height: string = '';
  @HostBinding("style.--image") image: string = '';

  constructor() { }

  ngOnInit(): void {
    this.height = this.cardRarity.card.cardType.cardSizes.insert.cssValue
    this.image = `url(${this.cardRarity.imageJp})`
  }

}
