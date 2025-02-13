import { Component } from '@angular/core';
import { Subject } from 'rxjs'; 
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  standalone: true,
  imports: [CustomerComponent]
})
export class ParentComponent {
  customer = { name: 'Ronny', age: 22 }; 
  refresh = new Subject<any>(); 

  onErrorReceived(error: any) {
    console.error('Error recibido:', error);
  }

  refreshCustomer() { 
    console.log('Cliente actualizado');
    this.refresh.next('Actualizar');
  }
}
