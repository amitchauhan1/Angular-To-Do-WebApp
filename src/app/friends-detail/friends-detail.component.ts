import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { KeyValue } from '@angular/common';

interface keyValue {
  id: number;
  name: string;
  Contact: number;
  Country: string;
}
@Component({
  selector: 'app-friends-detail',
  templateUrl: './friends-detail.component.html',
  styleUrls: ['./friends-detail.component.scss']
})
export class FriendsDetailComponent implements OnInit {

  constructor() { }

  // Get detail of Friends from Home
  @Input() detail: keyValue[];

  // Create event Send Friend data on click
  @Output() sendEvent = new EventEmitter<string>();

  // Create event Delete Friend data on click
  @Output() delEvent = new EventEmitter<string>();

  // Send data
  sendData(data) {
    this.sendEvent.emit(data);
  }

  // Delete data
  deleteData(data) {
    this.delEvent.emit(data);
  }

  ngOnInit() {
  }
  refresh() {
    this.detail = [
      {
        id: 0,
        name: 'Dhruvit',
        Contact: 11111111,
        Country: 'Aus'
      },
      {
        id: 1,
        name: 'Ankit',
        Contact: 11111111,
        Country: 'USA'
      },
      {
        id: 2,
        name: 'Dhaval',
        Contact: 11111111,
        Country: 'SA'
      },
      {
        id: 3,
        name: 'Navin',
        Contact: 11111111,
        Country: 'India'
      },
      {
      id: 5,
      name: 'Abc',
      Contact: 11111111,
      Country: 'India'
    }];
  }

  trackByCode(index, item) {
    return item.id;
  }
}
