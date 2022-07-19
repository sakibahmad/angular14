import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { EncalsulationComponent } from './encalsulation/encalsulation.component';
import { ComponentComponent } from './component.component';
import { RouterModule } from '@angular/router';
import { ComponentRoutingModule } from './component-routing.module';



@NgModule({
  declarations: [
    LifecycleComponent,
    EncalsulationComponent,
    ComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
