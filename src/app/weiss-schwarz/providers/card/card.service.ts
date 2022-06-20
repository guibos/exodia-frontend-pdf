import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CardRarity} from "../../classes/card-rarity/card-rarity";
import {DomSanitizer} from "@angular/platform-browser";
import {Card} from "../../classes/card/card";
import {environment} from "../../../../environments/environment";
import {CardType} from "../../classes/card-type/card-type";
import {CardTypeEnum} from "../../classes/card-type/card-type-enum";


@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  }

  public getCardRarities(productsIds: number[], cardRarityIds: number[]): Observable<CardRarity[]> {
    let httpParams = new HttpParams();
    if (cardRarityIds) {
      httpParams = httpParams.append('id__in', cardRarityIds.join());
    }
    if (productsIds) {
      httpParams = httpParams.append('product__in', productsIds.join());
    }

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
    cardRarity.cardNumberPhysical,
    cardRarity.imageEn,
    cardRarity.imageJp
  )
}

function _cardParser(card: Card, sanitizer: DomSanitizer): Card {
  let cardType = new CardType(
    card.cardType.id,
    CardTypeEnum[card.cardType.name]
  )

  return new Card(
    card.titleCode,
    card.product,
    card.cardId,
    card.canonicalCard,
    card.rarities,
    card.cardNumber,
    card.name,
    card.colour,
    card.soul,
    card.attributes,
    card.abilities,
    card.cost,
    card.level,
    cardType,
    card.power,
    card.triggers,
    sanitizer
  )
}
