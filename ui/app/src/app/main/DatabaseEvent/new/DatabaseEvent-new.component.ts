import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'DatabaseEvent-new',
  templateUrl: './DatabaseEvent-new.component.html',
  styleUrls: ['./DatabaseEvent-new.component.scss']
})
export class DatabaseEventNewComponent {
  @ViewChild("DatabaseEventForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}