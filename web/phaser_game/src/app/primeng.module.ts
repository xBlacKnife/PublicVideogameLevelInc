import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
    exports:  [
        ButtonModule,
        CardModule,
        CarouselModule,
        CheckboxModule,
        DialogModule,
        DropdownModule,
        FormsModule,
        InputTextModule
    ]
})

export class PrimeNGModule { }
