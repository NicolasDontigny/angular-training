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
  name: string | undefined;
  width: number | undefined;
  length: number | undefined;
  unit = 'feet';

  nameUnique = true;

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

  onUserSubmit(form: any) {
    if (this.areasService.areas.findIndex((area) => area.name === form.value.name) !== -1) {
      this.nameUnique = false;
    } else {
      this.nameUnique = true;
    }
    this.sendForm.emit(form);
  }

  onFormSubmit(form: any) {
    if (form.invalid) {
      return;
    } else if (this.areasService.areas.findIndex((area) => area.name === form.value.name) !== -1) {
      return;
    }

    this.name = undefined;
    this.width = undefined;
    this.length = undefined;

    const newArea = {
      name: form.value.name,
      width: form.value.width,
      length: form.value.length,
      unit: form.value.unit
    }

    this.areasService.addArea(newArea);
  }
}
