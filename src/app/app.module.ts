import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaCalculatorComponent } from './create-area/area-calculator/area-calculator.component';
import { ArrayComponent } from './create-area/array/array.component';

import { AreasService } from './areas.service';
import { AreaBoxComponent } from './create-area/array/area-box/area-box.component';
import { CreateAreaComponent } from './create-area/create-area.component';
import { BuildingComponent } from './building/building.component';

const appRoutes = [
  { path: '', component: CreateAreaComponent },
  { path: ':building', component: BuildingComponent }
  // { path: '', redirectTo: '/areas', pathMatch: 'full' }
  // { path: 'work', component: WorkComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AreaCalculatorComponent,
    ArrayComponent,
    AreaBoxComponent,
    CreateAreaComponent,
    BuildingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AreasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
