import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PipesComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplateRoutingModule,

  ]
})
export class TemplateModule { }
