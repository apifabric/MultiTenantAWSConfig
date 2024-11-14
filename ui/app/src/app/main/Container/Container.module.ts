import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CONTAINER_MODULE_DECLARATIONS, ContainerRoutingModule} from  './Container-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ContainerRoutingModule
  ],
  declarations: CONTAINER_MODULE_DECLARATIONS,
  exports: CONTAINER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerModule { }