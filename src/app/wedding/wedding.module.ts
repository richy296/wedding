import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitationPageComponent } from './pages/invitation-page/invitation-page.component';
import { WeddingRoutingModule } from './wedding-routing.module';



@NgModule({
  declarations: [
    InvitationPageComponent
  ],
  imports: [
    CommonModule,
    WeddingRoutingModule
  ]
})
export class WeddingModule { }
