import { Component, OnInit } from '@angular/core';
import { AreasService} from '../areas.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.less']
})
export class ArrayComponent implements OnInit {
  areasList: Array<object>;
  areasService: AreasService;

  constructor(areasService: AreasService) { 
    this.areasService = areasService;
    this.areasList = areasService.areas;
  }

  ngOnInit() {
  }

  clearLocalStorage() {
    console.log(this.areasService);
    this.areasService.clearStorage();
    this.areasList = [];
  }

}
