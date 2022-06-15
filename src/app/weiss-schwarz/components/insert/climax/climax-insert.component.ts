import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CardRarity} from "../../../classes/card-rarity/card-rarity";

@Component({
  selector: 'app-climax-insert',
  templateUrl: './climax-insert.component.html',
  styleUrls: ['./climax-insert.component.css']
})
export class ClimaxInsertComponent implements OnInit {
  @HostBinding("style.--cardWidth") cardWidth: string = '';
  @HostBinding("style.--cardHeight") cardHeight: string = '';
  @HostBinding("style.--frontHeight") frontHeight: string = '';
  @Input() cardRarity!: CardRarity;
  private _cardWidth = 63
  private _cardHeight = 88

  constructor() {
    this.cardWidth = `${this._cardWidth}mm`;
    this.cardHeight = `${this._cardHeight}mm`;
    this.frontHeight = `${this._cardWidth * 0.4166666614173228}mm`
  }

  ngOnInit(): void {

  }

}
