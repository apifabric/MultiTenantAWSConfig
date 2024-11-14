import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERCONTAINERACCESS_MODULE_DECLARATIONS, UserContainerAccessRoutingModule} from  './UserContainerAccess-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserContainerAccessRoutingModule
  ],
  declarations: USERCONTAINERACCESS_MODULE_DECLARATIONS,
  exports: USERCONTAINERACCESS_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserContainerAccessModule { }