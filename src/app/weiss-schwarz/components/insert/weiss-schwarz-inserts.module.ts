import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterInsertComponent} from "./character/character-insert.component";
import {ClimaxInsertComponent} from "./climax/climax-insert.component";
import {EventInsertComponent} from "./event/event-insert.component";
import {Ng2FittextModule} from "ng2-fittext";


@NgModule({
  declarations: [CharacterInsertComponent, ClimaxInsertComponent, EventInsertComponent],
  imports: [
    CommonModule,
    Ng2FittextModule,
  ],
  exports: [CharacterInsertComponent, ClimaxInsertComponent, EventInsertComponent]
})
export class WeissSchwarzInsertsModule {
}
