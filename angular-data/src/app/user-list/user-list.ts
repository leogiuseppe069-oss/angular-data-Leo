import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList {
  names: string[];  
  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; 
  }
}

