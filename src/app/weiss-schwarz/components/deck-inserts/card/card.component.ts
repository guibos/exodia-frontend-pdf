import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CardRarity} from "../../../classes/card-rarity/card-rarity";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardRarity!: CardRarity;

  @HostBinding("style.--width") width: string = '';
  @HostBinding("style.--border") border: string = '';
  constructor() { }



  ngOnInit(): void {
    this.width = this.cardRarity.card.cardType.cardSizes.card.width.cssValue
    this.border = this.cardRarity.card.cardType.cardSizes.border.cssValue

  }
}
