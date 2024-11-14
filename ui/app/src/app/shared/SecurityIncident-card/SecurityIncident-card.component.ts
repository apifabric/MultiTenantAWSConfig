import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SecurityIncident-card.component.html',
  styleUrls: ['./SecurityIncident-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SecurityIncident-card]': 'true'
  }
})

export class SecurityIncidentCardComponent {


}