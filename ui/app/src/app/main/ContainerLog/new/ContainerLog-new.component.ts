import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ContainerLog-new',
  templateUrl: './ContainerLog-new.component.html',
  styleUrls: ['./ContainerLog-new.component.scss']
})
export class ContainerLogNewComponent {
  @ViewChild("ContainerLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}