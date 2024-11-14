import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Container-card.component.html',
  styleUrls: ['./Container-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Container-card]': 'true'
  }
})

export class ContainerCardComponent {


}