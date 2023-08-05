import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrosDialogComponent } from './components/erros-dialog/erros-dialog.component';




@NgModule({
  declarations: [

    ErrosDialogComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [ErrosDialogComponent]
})
export class SharedModule { }
