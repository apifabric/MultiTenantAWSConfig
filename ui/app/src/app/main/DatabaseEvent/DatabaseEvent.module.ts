import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DATABASEEVENT_MODULE_DECLARATIONS, DatabaseEventRoutingModule} from  './DatabaseEvent-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DatabaseEventRoutingModule
  ],
  declarations: DATABASEEVENT_MODULE_DECLARATIONS,
  exports: DATABASEEVENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatabaseEventModule { }