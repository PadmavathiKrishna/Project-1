import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

/* Data Binding*/

export class UserComponent {
        term = 1;

        increaseTerm() {
          this.term++;
        }
        
}

