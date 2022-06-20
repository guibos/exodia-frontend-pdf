import {Component, OnInit} from '@angular/core';
import {CardService} from "../../../providers/card/card.service";
import {ActivatedRoute, Params} from "@angular/router";
import {CardRarity} from "../../../classes/card-rarity/card-rarity";

const cardRarityValue = new Map<string, number>([
  ['PR', 13],
  ['SSP', 12],
  ['SP', 11],
  ['RRR', 9],
  ['SR', 8],
  ['RR+', 8],
  ['RR', 7],
  ['R', 6],
  ['U', 5],
  ['C', 4],
  ['CR', 3],
  ['CC', 2],
  ['TD', 1],
]);

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  cardRarities: CardRarity[] = []

  constructor(private cardService: CardService, private route: ActivatedRoute) {
    let releases: number[]
    this.route.queryParams.subscribe(params => {
        releases = _getProductsIds(params);
        this._setCardRarities(releases)
      }
    );
  }

  ngOnInit(): void {
  }

  private _setCardRarities(products: number[]): void {
    this.cardService.getCardRarities(products, []).subscribe(cardRarities => {
      this.cardRarities = cardRarities
      this.cardRarities.sort(_sortCardRarities)
    })
  }

  public print(): void {
    window.dispatchEvent(new Event('resize'));
    window.print();
  }

}

function _getProductsIds(params: Params): number[] {
  return [Number(params['products'])]
}

function getCardRarityValue(cardRarity: CardRarity): number{
    return cardRarityValue.get(cardRarity.rarity.code) ?? 10
}


function _sortCardRarities(cardRarity1: CardRarity, cardRarity2: CardRarity): number {
  if (cardRarity1.card.cardId > cardRarity2.card.cardId) {
    return 1
  } else if (cardRarity1.card.cardId < cardRarity2.card.cardId) {
    return -1
  } else if (getCardRarityValue(cardRarity1) > getCardRarityValue(cardRarity2)){
    return 1
  } else if (getCardRarityValue(cardRarity1) < getCardRarityValue(cardRarity2)){
    return -1
  } else {
    return 0
  }
}
