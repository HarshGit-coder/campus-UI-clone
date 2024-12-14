import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {
 
  constructor(private location: Location) { }    // for going back to original location
  onClick() {
    this.location.back();
  }

}
