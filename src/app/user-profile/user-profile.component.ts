import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  title: string = 'Fiche de contact';

  ageVisible: boolean = true;

  user1: User = new User(
    'Doe',
    'John',
    25,
    '',
    'https://randomuser.me/api/portraits/lego/2.jpg'
  );

  toggleAge(): void {
    this.ageVisible = !this.ageVisible;
  }
}
