import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
// import * as data from '../../assets/friends.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id: number;
  name: string;
  Contact: number;
  Country: string;
  fnDetail = {};
  title = 'Freind Details';
  // Friend data....
  friends = [
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
    }
  ];

  constructor() {
    this.id = null;
  }

  // Get Data From event
  getData($event) {
    this.fnDetail = $event;
    console.log($event);
  }

  // Get data from event for delete data
  delData(event) {

    console.log(event);
    const index: number = this.friends.indexOf(event);
    if (confirm('Are you sure to delete your friend ' + event.name)) {
      this.friends.splice(index, 1);
    }
    console.log(this.friends.filter(obj => obj.id != event.id));
  }
  // Add Contect
  add() {
    if (this.name != null && this.Country != null && this.Contact != null) {
      this.friends.push({ id: this.id, name: this.name, Contact: this.Contact, Country: this.Country });
    }
    else {
      alert("Please Enter Value");
    }
  }
  ngOnInit() {
  }

}
