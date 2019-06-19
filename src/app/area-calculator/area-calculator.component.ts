import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AreasService } from '../areas.service';

@Component({
  selector: 'app-area-calculator',
  templateUrl: './area-calculator.component.html',
  styleUrls: ['./area-calculator.component.less']
})
export class AreaCalculatorComponent implements OnInit {
  // @Output() calculateArea = new EventEmitter<object>();
  @Output() sendForm = new EventEmitter<object>();
  width: number;
  length: number;
  unit: string;
  name: string;

  areasService: AreasService;

  units = [
    { display: 'Feet', value: 'feet' },
    { display: 'Meter', value: 'meter' }
  ];

  constructor(areasService: AreasService) { 
    this.areasService = areasService;
  }

  ngOnInit() {
  }

  onUserSubmit(form) {
    // const areaDetails = {
    //   name: form.value.name,
    //   width: form.value.width,
    //   length: form.value.length,
    //   unit: form.value.unit
    // }
    // this.calculateArea.emit(areaDetails);
    this.sendForm.emit(form);
  }

  onFormSubmit(form) {
    if (form.invalid) {
      return;
    }

    this.name = undefined;

    const newArea = {
      name: form.value.name,
      width: form.value.width,
      length: form.value.length,
      unit: form.value.unit
    }

    this.areasService.addArea(newArea);
  }
}
