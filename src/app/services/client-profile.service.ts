import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {
  isLoggedIn = false
  constructor() { }
}
