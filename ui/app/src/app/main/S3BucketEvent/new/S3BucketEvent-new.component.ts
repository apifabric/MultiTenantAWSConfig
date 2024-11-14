import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'S3BucketEvent-new',
  templateUrl: './S3BucketEvent-new.component.html',
  styleUrls: ['./S3BucketEvent-new.component.scss']
})
export class S3BucketEventNewComponent {
  @ViewChild("S3BucketEventForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}