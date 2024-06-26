import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseComponent } from './mouse/mouse.component';
import { MouseRowComponent } from './mouse-row/mouse-row.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MouseFormComponent } from './mouse-form/mouse-form.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseComponent,
    MouseRowComponent,
    MouseFormComponent,
    KeyboardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
