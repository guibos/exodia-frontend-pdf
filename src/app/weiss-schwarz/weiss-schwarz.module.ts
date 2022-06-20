import {CardService} from "./providers/card/card.service";
import {NgModule} from "@angular/core";
import {WeissSchwarzRoutingModule} from "./weiss-schwarz-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { CardFrontComponent } from './components/deck-inserts/card-front/card-front.component';
import { CardBackComponent } from './components/deck-inserts/card-back/card-back.component';
import { CardComponent } from './components/deck-inserts/card/card.component';
import { InsertListComponent } from './components/deck-inserts/insert-list/insert-list.component';
import { InsertComponent } from './components/insert/insert.component';
import {Ng2FittextModule} from "ng2-fittext";
import { AlbumComponent } from './components/album/album/album.component';
import { AlbumCardComponent } from './components/album/album-card/album-card.component';

@NgModule({
  declarations: [CardFrontComponent, CardBackComponent, CardComponent, InsertListComponent, InsertComponent, AlbumComponent, AlbumCardComponent],
  providers: [
    CardService,
  ],
  imports: [
    HttpClientModule,
    WeissSchwarzRoutingModule,
    Ng2FittextModule,
    CommonModule
  ],
  exports: []
})
export class WeissSchwarzModule {
}

