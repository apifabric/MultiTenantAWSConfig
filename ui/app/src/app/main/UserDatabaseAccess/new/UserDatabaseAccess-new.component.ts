import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserDatabaseAccess-new',
  templateUrl: './UserDatabaseAccess-new.component.html',
  styleUrls: ['./UserDatabaseAccess-new.component.scss']
})
export class UserDatabaseAccessNewComponent {
  @ViewChild("UserDatabaseAccessForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}