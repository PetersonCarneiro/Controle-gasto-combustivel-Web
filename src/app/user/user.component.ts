import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 
  users: any[] = []; // Vetor para armazenar os usuários
  name:string='';
  lastName:string='';
  password:string='';
  userRepassword:string='';
  email:string='';



  onSubmit() {
      const user = {
        name: this.name,
        lastName: this.lastName,
        password: this.password,
        userRepassword: this.userRepassword,
        email: this.email,
      };
      // Adicione o objeto 'user' ao vetor 'users'
      this.users.push(user);
      this.clearFields();
    
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

