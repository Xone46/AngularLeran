import { Injectable } from '@angular/core';
import { UserHttpService } from './user-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public flag: String = "he is UserService";
  public flagUserHttpService;

  constructor(public userHttpService : UserHttpService) {
    this.flagUserHttpService = userHttpService.flagUserHttpService;
   }
}
