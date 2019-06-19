import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Change this Title';
  areaDetails = {
    name: '',
    width: 0,
    length: 0,
    unit: ''
  }

  formInvalid = true;

  onCalculateArea(form) {
    if (form.invalid) {
      this.formInvalid = true;
    }
    else {
      this.areaDetails = {
        name: form.value.name,
        width: form.value.width,
        length: form.value.length,
        unit: form.value.unit
      }
      this.formInvalid = false;
    }
  }
}
