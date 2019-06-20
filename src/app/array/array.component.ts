import { Component, OnInit } from '@angular/core';
import { AreasService} from '../areas.service';
import { Observable } from 'rxjs';
import { Area } from '../models/area.model';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.less']
})
export class ArrayComponent implements OnInit {
  areasList: Array<object>;
  areasService: AreasService;
  areasObservable: Observable<Area[]>;

  constructor(areasService: AreasService) { 
    this.areasService = areasService;
    this.areasList = areasService.getAreasArray();

    this.areasObservable = areasService.getAreas();
  }

  ngOnInit() {
    this.areasObservable.subscribe((value) => {
      console.log('Observable value: ', value);
      this.areasList = value;
      console.log(this.areasList);
    });
  }

  clearLocalStorage() {
    this.areasService.clearStorage();
    this.areasList = [];
  }

}
