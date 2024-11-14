import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SecurityIncident-new',
  templateUrl: './SecurityIncident-new.component.html',
  styleUrls: ['./SecurityIncident-new.component.scss']
})
export class SecurityIncidentNewComponent {
  @ViewChild("SecurityIncidentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}