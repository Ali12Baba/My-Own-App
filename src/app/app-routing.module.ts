import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';


const routes: Routes = [
  {path:'', component: PropertyListComponent},
  {path:'rent-property', component: PropertyListComponent},
  {path: 'detail-property/:id', component: PropertyDetailComponent},
  {path:'add-property', component: AddPropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
