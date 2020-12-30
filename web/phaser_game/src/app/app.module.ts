import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule } from './views/editor/editor.module';
import { FooterComponent } from './shared/footer/footer.component';
import { GamePlayerModule } from './views/gameplayer/gameplayer.module';
import { HomeModule } from './views/home/home.module';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { PrimeNGModule } from './primeng.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    EditorModule,
    GamePlayerModule,
    HomeModule,
    PrimeNGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
