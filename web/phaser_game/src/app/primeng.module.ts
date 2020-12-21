import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';


@NgModule({
    exports:  [
        InputTextModule,
        CheckboxModule,
        CardModule,
        ButtonModule,
        DialogModule
    ]
})

export class PrimengNGModule { }
