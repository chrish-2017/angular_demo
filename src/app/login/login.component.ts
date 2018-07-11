/**
 * Created by SiPingSoft on 2017/8/14.
 */
import { Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { HttpResponse } from '../model/HttpResponse';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(val) {
    this.http.post<HttpResponse>('https://easy-mock.com/mock/5b3357dce144ee0b9ede2e12/store/intranet/admin/login', val).subscribe(data => {
      if(data.success){
        this.router.navigate(['/index']);
      }
    })
  }
}
