import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  areas = [
    {name: 'Living Room', width: 5, length: 9, unit: 'feet'},
    {name: 'Kitchen', width: 8, length: 3, unit: 'meter'}
  ]

  constructor() { }

  addArea(areaDetails) {
    this.areas.push(areaDetails);
  }
}
