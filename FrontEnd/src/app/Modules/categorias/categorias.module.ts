import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';


@NgModule({
  declarations: [
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class CategoriasModule { }
