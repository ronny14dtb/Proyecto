import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  standalone: true
})
export class CustomerComponent implements OnInit {
  @Input() customer: any = null;
  @Input() refresh?: Subject<any>; 
  @Output() errorLoadEvent = new EventEmitter<string>();


  ngOnInit(): void {
    this.refresh?.subscribe((change) => {
      this.onRefresh(change);
    });
  }

  onRefresh(change: any) {
    console.log('Refrescando cliente:', change);

  }

  sendError() {
    this.errorLoadEvent.emit('Ocurrió un error al cargar el cliente');
  }

}

