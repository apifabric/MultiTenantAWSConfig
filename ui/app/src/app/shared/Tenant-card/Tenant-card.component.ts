import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Tenant-card.component.html',
  styleUrls: ['./Tenant-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Tenant-card]': 'true'
  }
})

export class TenantCardComponent {


}