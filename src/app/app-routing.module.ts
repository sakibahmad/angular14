import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  
  { path: 'component', loadChildren: () => import('../component/component.module').then(m => m.ComponentModule) },
  { path: 'template', loadChildren: () => import('../template/template.module').then(m => m.TemplateModule) },
  { path: '',  redirectTo: 'component', pathMatch: 'prefix' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
