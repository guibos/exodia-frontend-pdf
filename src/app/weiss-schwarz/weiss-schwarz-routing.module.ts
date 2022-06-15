import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InsertsListComponent} from "./components/deck-inserts/list/inserts-list.component";

const routes: Routes = [
  {
    path: "weiss-schwarz/inserts",
    component: InsertsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WeissSchwarzRoutingModule {
}
