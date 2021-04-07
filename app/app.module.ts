import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AgGridModule} from "ag-grid-angular/main";
import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";
import {RendererComponent} from "./grid-cell-renderer/renderer.component";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule, AgGridModule.withComponents(
            [RendererComponent]
        ) ],
  declarations: [ AppComponent, HelloComponent,MyGridApplicationComponent, RendererComponent ],
    entryComponents: [
     RendererComponent
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
