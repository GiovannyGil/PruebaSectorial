import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TemasRoutingModule } from './temas-routing.module';
import { TemasComponent } from './temas/temas.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarTemaDirective } from './agregar-tema.directive'; 

const routes: Routes = [
  { path: '', component: TemasComponent },
];

@NgModule({
  declarations: [
    TemasComponent,
    AgregarTemaDirective
  ],
  imports: [
    CommonModule,
    TemasRoutingModule,
    FormsModule,      
    ReactiveFormsModule,  
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
})
export class TemasModule {}
