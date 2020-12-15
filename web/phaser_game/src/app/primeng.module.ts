import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
    exports:  [
        InputTextModule,
        CheckboxModule
    ]
})

export class PrimengNGModule { }
