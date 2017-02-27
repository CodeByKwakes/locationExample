import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Loactions } from '../loactions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  locations: Loactions[];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLocations().subscribe(
      locations => this.locations = locations
    );
  }

}
