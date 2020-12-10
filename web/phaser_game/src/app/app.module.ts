import { BrowserModule } from '@angular/platform-browser';
//import { PrimengModule } from 'primeng';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GameplayerComponent } from './gameplayer/gameplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GameplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
