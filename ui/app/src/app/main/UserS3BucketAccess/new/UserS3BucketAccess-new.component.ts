import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserS3BucketAccess-new',
  templateUrl: './UserS3BucketAccess-new.component.html',
  styleUrls: ['./UserS3BucketAccess-new.component.scss']
})
export class UserS3BucketAccessNewComponent {
  @ViewChild("UserS3BucketAccessForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}