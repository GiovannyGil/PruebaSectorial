import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule, Routes } from '@angular/router';
import { SubcategoriasRoutingModule } from './subcategorias-routing.module';
import { SubcategoriasComponent } from './subcategorias/subcategorias.component';

const routes: Routes = [
  { path: '', component: SubcategoriasComponent }
];

@NgModule({
  declarations: [
    SubcategoriasComponent
  ],
  imports: [
    CommonModule,
    SubcategoriasRoutingModule,
    FormsModule, // Asegúrate de importar FormsModule aquí
    RouterModule.forChild(routes)
  ]
})
export class SubcategoriasModule { }
