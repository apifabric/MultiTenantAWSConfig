import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Tenant-new',
  templateUrl: './Tenant-new.component.html',
  styleUrls: ['./Tenant-new.component.scss']
})
export class TenantNewComponent {
  @ViewChild("TenantForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}