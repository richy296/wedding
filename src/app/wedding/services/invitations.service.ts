import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invitation } from '../interfaces/wedding.interface';


@Injectable({
  providedIn: 'root'
})
export class InvitationsService {

  private _url: string = '/assets/data/db.json';

  constructor(private httpService: HttpClient,) {
  }

  getHeroes() {
    return this.httpService.get<Invitation>(this._url);
  }
}
