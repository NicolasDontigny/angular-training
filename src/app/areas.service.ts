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
    const areasList = localStorage.getItem('areasList');
    if (areasList) {
      const areasArray = JSON.parse(areasList);
      this.areas = areasArray;
    } else {
      this.areas = [];
    }

  }

  addArea(areaDetails: Area) {
    this.areas.push(areaDetails);

    const areasList = localStorage.getItem('areasList');
    if (areasList) {
      const newLocalStorageArray = JSON.parse(areasList);
      newLocalStorageArray.push(areaDetails);
      localStorage.setItem('areasList', JSON.stringify(newLocalStorageArray));
    }
  }

  clearStorage() {
    localStorage.clear();
    this.areas = [];
  }

  editArea(editDetails: Area) {
    const areasIndex = this.areas.findIndex((area) => {
      return area.name === editDetails.name;
    })

    this.areas[areasIndex].width = editDetails.width;
    this.areas[areasIndex].length = editDetails.length;

    const areasList = localStorage.getItem('areasList');

    if (areasList) {
      const editLocalStorageArray = JSON.parse(areasList);
      const localStorageIndex = editLocalStorageArray.findIndex((area: Area) => {
        return area.name === editDetails.name;
      });
      editLocalStorageArray[localStorageIndex].width = editDetails.width;
      editLocalStorageArray[localStorageIndex].length = editDetails.length;

      localStorage.setItem('areasList', JSON.stringify(editLocalStorageArray));
    }

  }
}
