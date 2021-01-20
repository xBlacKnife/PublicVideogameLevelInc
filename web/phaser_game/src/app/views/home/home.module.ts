import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
