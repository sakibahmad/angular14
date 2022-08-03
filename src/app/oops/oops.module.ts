import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OopsRoutingModule } from './oops-routing.module';
import { InheritanceComponent } from './inheritance/inheritance.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { AbstractionComponent } from './abstraction/abstraction.component';
import { PolymorphismComponent } from './polymorphism/polymorphism.component';


@NgModule({
  declarations: [
    InheritanceComponent,
    EncapsulationComponent,
    AbstractionComponent,
    PolymorphismComponent
  ],
  imports: [
    CommonModule,
    OopsRoutingModule
  ]
})
export class OopsModule { }
