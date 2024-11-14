import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseEventHomeComponent } from './home/DatabaseEvent-home.component';
import { DatabaseEventNewComponent } from './new/DatabaseEvent-new.component';
import { DatabaseEventDetailComponent } from './detail/DatabaseEvent-detail.component';

const routes: Routes = [
  {path: '', component: DatabaseEventHomeComponent},
  { path: 'new', component: DatabaseEventNewComponent },
  { path: ':id', component: DatabaseEventDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DatabaseEvent-detail-permissions'
      }
    }
  }
];

export const DATABASEEVENT_MODULE_DECLARATIONS = [
    DatabaseEventHomeComponent,
    DatabaseEventNewComponent,
    DatabaseEventDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseEventRoutingModule { }