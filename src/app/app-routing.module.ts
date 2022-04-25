import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { HomeupdateComponent } from './homeupdate/homeupdate.component';

const routes: Routes = [
  { path: 'homeinfo', component: HomeinfoComponent },
  { path: 'homeupdate', component: HomeupdateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
