import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }
  property: any = {
    "id": 1,
    "name": "ali",
    "age":26
  }
  ngOnInit(): void {
  }

}
