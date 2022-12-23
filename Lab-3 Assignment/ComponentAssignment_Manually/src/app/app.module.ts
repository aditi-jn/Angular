import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuccessComponent } from './successAlert.component';
import { WarningComponent } from './warningAlert.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }