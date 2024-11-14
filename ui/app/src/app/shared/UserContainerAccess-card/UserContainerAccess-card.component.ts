import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserContainerAccess-card.component.html',
  styleUrls: ['./UserContainerAccess-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserContainerAccess-card]': 'true'
  }
})

export class UserContainerAccessCardComponent {


}