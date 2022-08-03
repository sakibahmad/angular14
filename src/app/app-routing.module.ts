import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  
  { path: 'component', loadChildren: () => import('./component/component.module').then(m => m.ComponentModule) },
  { path: 'template', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
  { path: 'oops' , loadChildren: () => import('./oops/oops.module').then(m => m.OopsModule)},
  { path: 'java-script', loadChildren:() => import('./js/java-script.module').then(m => m.JavaScriptModule) },
  { path: '',  redirectTo: 'component', pathMatch: 'prefix' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
