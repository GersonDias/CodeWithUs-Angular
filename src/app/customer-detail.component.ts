import { Component, Input } from '@angular/core';
import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html',
})

export class CustomerDetailComponent  {
  @Input()
  customer: Customer;

  showAddress = true;

  regions   = ['East', 'Midwest', 'North', 'South', 'West'];

  /* Create an array of states that includes previous states PLUS Illinois */
  states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];
}
