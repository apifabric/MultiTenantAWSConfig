import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CONTAINERLOG_MODULE_DECLARATIONS, ContainerLogRoutingModule} from  './ContainerLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ContainerLogRoutingModule
  ],
  declarations: CONTAINERLOG_MODULE_DECLARATIONS,
  exports: CONTAINERLOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerLogModule { }