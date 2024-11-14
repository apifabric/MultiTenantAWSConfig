import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerAccessHomeComponent } from './home/UserContainerAccess-home.component';
import { UserContainerAccessNewComponent } from './new/UserContainerAccess-new.component';
import { UserContainerAccessDetailComponent } from './detail/UserContainerAccess-detail.component';

const routes: Routes = [
  {path: '', component: UserContainerAccessHomeComponent},
  { path: 'new', component: UserContainerAccessNewComponent },
  { path: ':id', component: UserContainerAccessDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserContainerAccess-detail-permissions'
      }
    }
  }
];

export const USERCONTAINERACCESS_MODULE_DECLARATIONS = [
    UserContainerAccessHomeComponent,
    UserContainerAccessNewComponent,
    UserContainerAccessDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserContainerAccessRoutingModule { }