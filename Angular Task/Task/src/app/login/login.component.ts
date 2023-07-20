import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/* navigation */

export class LoginComponent {
  constructor(private router:Router){}

  onclicksave() {
      this.router.navigate(['/admin/user']);
  }

}
