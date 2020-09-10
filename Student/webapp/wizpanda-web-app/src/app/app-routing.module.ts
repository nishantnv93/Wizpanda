import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_URLS } from './constant/app.constants';
import { SaveReordComponent } from './save-reord/save-reord.component';


const routes: Routes = [ 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: APP_URLS.REGISTER
  },
  {
    path: APP_URLS.REGISTER,
    component: SaveReordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
