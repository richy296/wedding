import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvitationPageComponent } from './pages/invitation-page/invitation-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'invitation-page',
        component: InvitationPageComponent
      },
      {
        path: 'invitation-page/:id',
        component: InvitationPageComponent
      },
      {
        path: '**',
        redirectTo: 'invitation-page'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class WeddingRoutingModule { }
