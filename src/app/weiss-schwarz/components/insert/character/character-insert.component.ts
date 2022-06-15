import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CardRarity} from "../../../classes/card-rarity/card-rarity";

@Component({
  selector: 'app-character-insert',
  templateUrl: './character-insert.component.html',
  styleUrls: ['./character-insert.component.css'],
})
export class CharacterInsertComponent implements OnInit {
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
