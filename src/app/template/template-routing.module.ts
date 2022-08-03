import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule  } from '@angular/router';
import { TemplateComponent } from './template.component';

const TemplateRoutes:Routes = [
  {path: '', component:TemplateComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(TemplateRoutes)
  ],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
