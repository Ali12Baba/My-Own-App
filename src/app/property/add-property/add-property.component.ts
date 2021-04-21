import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  // @ViewChild('form') addPropertyForm: NgForm;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit(form:NgForm) {
    console.log('hi test');
    console.log(form);
    // console.log(this.addPropertyForm);

  }

}
