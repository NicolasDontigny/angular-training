import { Component, OnInit, Input } from '@angular/core';
import { AreasService } from '../../../areas.service';
import { Area } from '../../../models/area.model';

@Component({
  selector: 'app-area-box',
  templateUrl: './area-box.component.html',
  styleUrls: ['./area-box.component.less']
})
export class AreaBoxComponent implements OnInit {
  @Input()
  area: Area | undefined;
  @Input()
  index: number;
  width = 0;
  length = 0;
  areasService: AreasService;

  constructor(areasService: AreasService) {
    this.areasService = areasService;
  }

  ngOnInit() {
    if (this.area && this.area.width) {
      this.width = this.area.width;
    }

    if (this.area && this.area.length) {
      this.length = this.area.length;
    }
  }

  editArea() {
    // console.log(this.area);
    // console.log(this.width);
    // console.log(this.length);

    const area = this.area;
    const width = this.width;
    const length = this.length;

    if (area) {
      const editDetails = {
        name: area.name,
        width,
        length,
        unit: area.unit,
        building: area.building
      }
      this.areasService.editArea(editDetails);
    }

  }

  assignBuilding(building) {
    this.areasService.assignBuilding(this.area, building);
  }

}
