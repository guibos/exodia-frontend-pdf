import {CardService} from "./providers/card/card.service";
import {NgModule} from "@angular/core";
import {InsertsListComponent} from "./components/deck-inserts/list/inserts-list.component";
import {WeissSchwarzRoutingModule} from "./weiss-schwarz-routing.module";
import {CommonModule} from "@angular/common";
import {WeissSchwarzInsertsModule} from "./components/insert/weiss-schwarz-inserts.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [InsertsListComponent],
  providers: [
    CardService,
  ],
  imports: [
    HttpClientModule,
    WeissSchwarzInsertsModule,
    WeissSchwarzRoutingModule,
    CommonModule
  ],
  exports: []
})
export class WeissSchwarzModule {
}
