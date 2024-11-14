import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './S3BucketEvent-card.component.html',
  styleUrls: ['./S3BucketEvent-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.S3BucketEvent-card]': 'true'
  }
})

export class S3BucketEventCardComponent {


}