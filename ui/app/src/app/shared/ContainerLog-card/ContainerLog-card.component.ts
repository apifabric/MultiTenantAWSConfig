import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ContainerLog-card.component.html',
  styleUrls: ['./ContainerLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ContainerLog-card]': 'true'
  }
})

export class ContainerLogCardComponent {


}