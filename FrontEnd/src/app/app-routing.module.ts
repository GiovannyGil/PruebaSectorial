import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemasComponent } from './Modules/temas/temas/temas.component';


const routes: Routes = [
  // Rutas con carga diferida (lazy loading) para cada módulo
  { path: 'temas', loadChildren: () => import('./Modules/temas/temas.module').then(m => m.TemasModule) },
  { path: 'subcategorias', loadChildren: () => import('./Modules/subcategorias/subcategorias.module').then(m => m.SubcategoriasModule) },
  { path: 'categorias', loadChildren: () => import('./Modules/categorias/categorias.module').then(m => m.CategoriasModule) },
  
  // Ruta inicial: Home
  { path: '', component: AppComponent, pathMatch: 'full' },

  // Redirección para rutas no encontradas
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
