import { ActivatedRoute } from '@angular/router';
import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>;
  sellrent = 1;
  constructor(private route :ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellrent = 2;
    }
    this.housingService.getAllProperties(this.sellrent)
      .subscribe(data => {
        this.properties = data;
        console.log(data);

    })
  }

}
