import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { primengConfig } from './primengConfig';

//Libreias de compoenntes para el front y estilos 
import { LoginComponent } from './game/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    primengConfig, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
