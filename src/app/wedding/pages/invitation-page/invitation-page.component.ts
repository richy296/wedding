import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router, UrlTree } from '@angular/router';
import { Guest, Host } from '../../interfaces/wedding.interface';
import { InvitationsService } from '../../services/invitations.service';

@Component({
  selector: 'app-invitation-page',
  templateUrl: './invitation-page.component.html',
  styleUrls: ['./invitation-page.component.scss']
})
export class InvitationPageComponent {

  guest: Guest | null = {};
  hosts: Host = {};
  mapWedding: SafeHtml  = '';
  idInvitation: string | null = null;

  constructor(private invitationService: InvitationsService, private sanitizer: DomSanitizer, private router: ActivatedRoute) {
    this.getInvitations();
    this.idInvitation = this.router.snapshot.paramMap.get('id') || null;
  }

  getInvitations(){
    this.invitationService.getHeroes()
      .subscribe(invitation => {
        if (invitation) {
          this.guest = invitation.guests.find(guest => guest.id == this.idInvitation) || null;
          this.hosts = invitation.hosts;
          this.mapWedding = this.sanitizerUrl(this.hosts.direction?.map);
        }
    });
  }

  private sanitizerUrl(url: string = ''){
    return this.sanitizer.bypassSecurityTrustHtml(url);
  }

}
