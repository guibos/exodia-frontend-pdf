import {Component, OnInit} from '@angular/core';
import {CardRarity} from "../../../classes/card-rarity/card-rarity";
import {PlaySet} from "../../../classes/play-set/play-set";
import {CardService} from "../../../providers/card/card.service";
import {ActivatedRoute, Params} from "@angular/router";
import {PlaySetCardId} from "../../../classes/play-set-card-id/play-set-card-id";
import {CardTypeEnum} from "../../../classes/card-type/card-type-enum";

@Component({
  selector: 'app-insert-list',
  templateUrl: './insert-list.component.html',
  styleUrls: ['./insert-list.component.css']
})
export class InsertListComponent implements OnInit {
  public playSets: PlaySet[] = []


  constructor(private cardService: CardService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        this._getCards(this._getPlaySetCardId(params));
      }
    );
  }

  ngOnInit(): void {
  }


  public print(): void {
    window.dispatchEvent(new Event('resize'));
    window.print();
  }

  private _getPlaySetCardId(params: Params): PlaySetCardId[] {
    return Object.entries(params).map(([cardNumber, copies]) => (
      new PlaySetCardId(Number(cardNumber), Number(copies))))
  }

  private _getPlaySet(playSetsIds: PlaySetCardId[], cardRarities: CardRarity[]): PlaySet[] {
    const playSets: PlaySet[] = []
    let playSetId: PlaySetCardId
    let cardRaritiesFiltered: CardRarity[]

    for (playSetId of playSetsIds) {
      cardRaritiesFiltered = cardRarities.filter(cardRarity => cardRarity.pk == playSetId.cardId)
      playSets.push(new PlaySet(
        cardRaritiesFiltered[0],
        playSetId.copies
      ))
    }
    return playSets
  }

  private _getCards(playSetCardIds: PlaySetCardId[]): void {
    const cardIds = _getCardIds(playSetCardIds)
    this.cardService.getCardRarities([], cardIds).subscribe(cardRarities => {
      this.playSets = this._getPlaySet(playSetCardIds, cardRarities)
      this.playSets.sort(_sortPlaySets)
    })
  };

  *deckCards(): IterableIterator<CardRarity> {
    let playSet: PlaySet
    let i: number
    for (playSet of this.playSets) {
      i = 1
      while(i <= playSet.copies){
        yield playSet.cardRarity
        i++;
      }
    }
  }

}

function _getCardIds(playSetCardIds: PlaySetCardId[]): number[] {
  let cardIds: number[] = []
  let playSetCardId: PlaySetCardId
  for (playSetCardId of playSetCardIds) {
    cardIds.push(playSetCardId.cardId)
  }
  return cardIds
}

function _sortPlaySets(playSet1: PlaySet, playSet2: PlaySet): number {
  if (playSet1.cardRarity.card.cardType.name != CardTypeEnum.Climax && playSet2.cardRarity.card.cardType.name == CardTypeEnum.Climax) {
    return -1
  } else if (playSet1.cardRarity.card.cardType.name == CardTypeEnum.Climax && playSet2.cardRarity.card.cardType.name != CardTypeEnum.Climax) {
    return 1
  } else if (playSet1.cardRarity.card.cardId > playSet2.cardRarity.card.cardId) {
    return 1
  } else if (playSet1.cardRarity.card.cardId < playSet2.cardRarity.card.cardId) {
    return -1
  } else {
    return 0
  }
}
