import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CardRarity} from "../../classes/card-rarity/card-rarity";
import {DomSanitizer} from "@angular/platform-browser";
import {Card} from "../../classes/card/card";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  }

  getCardRarities(cardRarityIds: number[]): Observable<CardRarity[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('id__in', cardRarityIds.join());
    let cardResponseObservable: Observable<CardRarity[]> = this.http.get<CardRarity[]>(
      environment.API_URL, {
        params: httpParams
      })
    return cardResponseObservable.pipe(map(res => _cardRaritiesParser(res, this.sanitizer)))
  }

}


function _cardRaritiesParser(cardRarities: CardRarity[], sanitizer: DomSanitizer): CardRarity[] {
  let cardRarity: CardRarity
  let instances: CardRarity[] = []

  for (cardRarity of cardRarities) {
    cardRarity = _cardRarityParser(cardRarity, sanitizer)
    instances.push(cardRarity)
  }
  return instances
}

function _cardRarityParser(cardRarity: CardRarity, sanitizer: DomSanitizer): CardRarity {
  return new CardRarity(
    cardRarity.pk,
    _cardParser(cardRarity.card, sanitizer),
    cardRarity.rarity,
    cardRarity.cardNumberPhysical
  )
}

function _cardParser(card: Card, sanitizer: DomSanitizer): Card {
  return new Card(
    card.titleCode,
    card.release,
    card.releaseType,
    card.cardId,
    card.rarities,
    card.cardNumber,
    card.name,
    card.colour,
    card.soul,
    card.attributes,
    card.abilities,
    card.cost,
    card.level,
    card.type,
    card.power,
    card.triggers,
    sanitizer
  )
}
