import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'S3Bucket-new',
  templateUrl: './S3Bucket-new.component.html',
  styleUrls: ['./S3Bucket-new.component.scss']
})
export class S3BucketNewComponent {
  @ViewChild("S3BucketForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}