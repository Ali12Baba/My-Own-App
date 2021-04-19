import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
 properties: Array<any> = [
    {
      "id": 1,
      "name": "ali",
      "age":26
    },
    {
      "id": 2,
      "name": "ali raza ",
      "age":26
    },
    {
      "id": 3,
      "name": "ali",
      "age":26
    },
    {
      "id": 4,
      "name": "ali",
      "age":26
    },
    {
      "id": 5,
      "name": "ali",
      "age":26
    },
    {
      "id": 6,
      "name": "ali",
      "age":26
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
