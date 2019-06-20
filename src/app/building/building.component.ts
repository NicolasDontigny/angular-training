import { Component, OnInit } from '@angular/core';
import { AreasService } from '../areas.service';
import { Area } from '../models/area.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.less']
})
export class BuildingComponent implements OnInit {
  areasService: AreasService;
  chosenAreas: Area[];
  chosenBuilding: string;
  activatedRoute: ActivatedRoute;
  areasObservable: Observable<void>;

  constructor(areasService: AreasService, activatedRoute: ActivatedRoute) {
    this.areasService = areasService;
    // this.chosenAreas = areasService.getAreasArray().filter(area => area.building === 'house');

    this.activatedRoute = activatedRoute;
    this.areasObservable = areasService.getAreasChanged();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.chosenBuilding = params.building;
        this.chosenAreas = this.areasService.getAreasArray().filter(area => area.building === params.building);
      }
    );

    this.areasObservable.subscribe(
      () => {
        console.log(this.chosenBuilding);
        this.chosenAreas = this.areasService.getAreasArray().filter(area => area.building === this.chosenBuilding);
      }
    );
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
