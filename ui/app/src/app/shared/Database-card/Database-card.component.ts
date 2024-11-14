import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Database-card.component.html',
  styleUrls: ['./Database-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Database-card]': 'true'
  }
})

export class DatabaseCardComponent {


}