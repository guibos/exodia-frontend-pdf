import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CardService} from "../../../providers/card/card.service";
import {CardRarity} from "../../../classes/card-rarity/card-rarity";
import {ActivatedRoute, Params} from "@angular/router";
import {PlaySet} from "../../../classes/play-set/play-set";
import {PlaySetCardId} from "../../../classes/play-set-card-id/play-set-card-id";


@Component({
  selector: 'app-inserts',
  templateUrl: './inserts-list.component.html',
  styleUrls: ['./inserts-list.component.css']
})
export class InsertsListComponent implements OnInit {
  @HostBinding("style.--cardWidth") cardWidth: string = '';
  @HostBinding("style.--cardHeight") cardHeight: string = '';
  @HostBinding("style.--frontHeight") frontHeight: string = '';
  @Input() cardRarity!: CardRarity;


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
    const cardIds = this._getCardIds(playSetCardIds)
    this.cardService.getCardRarities(cardIds).subscribe(cardRarities => {
      this.playSets = this._getPlaySet(playSetCardIds, cardRarities)
      this.playSets.sort(this._sortPlaySets)
    })
  };

  private _getCardIds(playSetCardIds: PlaySetCardId[]): number[] {
    let cardIds: number[] = []
    let playSetCardId: PlaySetCardId
    for (playSetCardId of playSetCardIds) {
      cardIds.push(playSetCardId.cardId)
    }
    return cardIds
  }

  private _sortPlaySets(playSet1: PlaySet, playSet2: PlaySet): number {
    if (playSet1.cardRarity.card.type.name != 'Climax' && playSet2.cardRarity.card.type.name == 'Climax') {
      return -1
    } else if (playSet2.cardRarity.card.type.name == 'Climax' && playSet1.cardRarity.card.type.name != 'Climax') {
      return 1
    } else if (playSet1.cardRarity.card.cardId > playSet2.cardRarity.card.cardId) {
      return 1
    } else {
      return 0
    }
  }

}
