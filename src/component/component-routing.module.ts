import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ComponentComponent } from "./component.component";

const ComponentRoute: Routes = [
    {path: "", component: ComponentComponent}
]


  @NgModule({
    imports: [RouterModule.forChild(ComponentRoute)],
  exports: [RouterModule],
  })
  export class ComponentRoutingModule { }