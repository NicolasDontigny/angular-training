import { Component, OnInit } from '@angular/core';
import { Area } from '../models/area.model';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.less']
})
export class CreateAreaComponent implements OnInit {
  areaDetails: Area;

  formInvalid = true;

  constructor() { }

  ngOnInit() {
  }

  onCalculateArea(form: any) {
    if (form.invalid) {
      this.formInvalid = true;
    } else {
      this.areaDetails = {
        name: form.value.name,
        width: form.value.width,
        length: form.value.length,
        unit: form.value.unit,
        building: 'none'
      }
      this.formInvalid = false;
    }
  }

}
