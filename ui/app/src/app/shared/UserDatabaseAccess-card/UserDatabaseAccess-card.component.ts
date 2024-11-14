import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserDatabaseAccess-card.component.html',
  styleUrls: ['./UserDatabaseAccess-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserDatabaseAccess-card]': 'true'
  }
})

export class UserDatabaseAccessCardComponent {


}