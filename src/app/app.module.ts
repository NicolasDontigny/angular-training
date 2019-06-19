import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaCalculatorComponent } from './area-calculator/area-calculator.component';
import { ArrayComponent } from './array/array.component';

import { AreasService } from './areas.service';
import { AreaBoxComponent } from './array/area-box/area-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaCalculatorComponent,
    ArrayComponent,
    AreaBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AreasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
