import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './S3Bucket-card.component.html',
  styleUrls: ['./S3Bucket-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.S3Bucket-card]': 'true'
  }
})

export class S3BucketCardComponent {


}