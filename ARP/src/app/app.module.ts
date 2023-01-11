import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { ArgPROComponent } from './componentes/arg-pro/arg-pro.component';
import { HeaderComponent } from './componentes/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    ArgPROComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
