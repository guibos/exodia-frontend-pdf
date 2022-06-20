import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CardRarity} from "../../../classes/card-rarity/card-rarity";

@Component({
  selector: 'app-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.css']
})
export class CardBackComponent implements OnInit {
  @Input() cardRarity!: CardRarity;
  @HostBinding("style.--height") height: string = '';

  constructor() { }


  ngOnInit(): void {
    this.height = this.cardRarity.card.cardType.cardSizes.card.height.cssValue

  }

}
