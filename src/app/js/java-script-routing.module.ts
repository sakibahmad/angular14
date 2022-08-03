import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavaScriptComponent } from './java-script.component';

const routes: Routes = [
  {path: "", component:JavaScriptComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaScriptRoutingModule { }
