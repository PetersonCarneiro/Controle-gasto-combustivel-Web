import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  name: string = '';
  lastName: string = '';
  password: string = '';
  userRepassword: string = '';
  email: string = '';

  showElements: boolean = false;

  ngOnInit() {
    // Carregue os usuários do localStorage no início
    this.loadUsersFromLocalStorage();
  }

  onSubmit() {
    let user = {
      name: this.name,
      lastName: this.lastName,
      password: this.password,
      userRepassword: this.userRepassword,
      email: this.email,
    };
    // Adicione o objeto 'user' ao vetor 'users'
    this.users.push(user);
    
    // Salve os usuários no localStorage
    localStorage.setItem('users', JSON.stringify(this.users));
    this.showElements = true;

  }

  loadUsersFromLocalStorage() {
    // Recupere os usuários do localStorage e atribua-os à matriz 'users'
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  clearFields() {
    // Limpe os campos do formulário definindo suas propriedades no componente para vazios
    this.name = '';
    this.lastName = '';
    this.password = '';
    this.userRepassword = '';
    this.email = '';
  }
}

