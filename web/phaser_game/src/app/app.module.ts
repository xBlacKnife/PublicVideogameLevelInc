import { BrowserModule } from '@angular/platform-browser';
//import { PrimengModule } from 'primeng';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HomeModule } from './views/home/home.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { GamePlayerModule } from './views/gameplayer/gameplayer.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    GamePlayerModule
    //PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
