import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DatabaseEvent-card.component.html',
  styleUrls: ['./DatabaseEvent-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DatabaseEvent-card]': 'true'
  }
})

export class DatabaseEventCardComponent {


}