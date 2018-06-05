import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AttachmentItemComponent } from './attachment-item/attachment-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AttachmentItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
