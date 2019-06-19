import { Injectable } from '@angular/core';
import { Area } from './models/area.model';


@Injectable({
  providedIn: 'root'
})
export class AreasService {
  areas: Array<Area>;

  constructor() { 
    if (!localStorage.getItem('areasList')) {
      localStorage.setItem('areasList', '[]');
    }
    const areasArray = JSON.parse(localStorage.getItem('areasList'))

    this.areas = areasArray;
  }

  addArea(areaDetails) {
    this.areas.push(areaDetails);

    const newLocalStorageArray = JSON.parse(localStorage.getItem('areasList'));
    newLocalStorageArray.push(areaDetails);

    localStorage.setItem('areasList', JSON.stringify(newLocalStorageArray));
    // localStorage.areasList.push(areaDetails);
  }

  clearStorage() {
    localStorage.clear();
    this.areas = [];
  }

  editArea(editDetails) {
    const areasIndex = this.areas.findIndex((area) => {
      return area.name === editDetails.area.name;
    })

    this.areas[areasIndex].width = editDetails.newWidth;
    this.areas[areasIndex].length = editDetails.newLength;

    const editLocalStorageArray = JSON.parse(localStorage.getItem('areasList'));
    const localStorageIndex = editLocalStorageArray.findIndex((area) => {
      return area.name === editDetails.area.name;
    });
    editLocalStorageArray[localStorageIndex].width = editDetails.newWidth;
    editLocalStorageArray[localStorageIndex].length = editDetails.newLength;

    localStorage.setItem('areasList', JSON.stringify(editLocalStorageArray));
  }
}
