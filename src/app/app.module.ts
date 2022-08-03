import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaScriptComponent } from './js/java-script.component';
import { JavaScriptModule } from './js/java-script.module';




@NgModule({
  declarations: [
    AppComponent,
    JavaScriptComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    JavaScriptModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
