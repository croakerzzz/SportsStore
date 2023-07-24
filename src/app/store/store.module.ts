import {NgModule} from "@angular/core";
import {ModelModule} from "../model/model.module";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {StoreComponent} from "./store.component";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [StoreComponent],
  exports: [StoreComponent]
})
export class StoreModule {
}
