import { Component, OnInit } from '@angular/core';
import { AreasService} from '../areas.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.less']
})
export class ArrayComponent implements OnInit {
  areasList: Array<object>;

  constructor(private areasService: AreasService) { 

  }

  ngOnInit() {
    this.areasList = this.areasService.areas;
  }

}
