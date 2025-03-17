import { Component, inject} from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from '../../services/Login.service/login.service';
import { Login } from '../../model/login.spec';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginService = inject(LoginServiceService)
router = inject(Router);

 login:Login = new Login("","");


  logar() {

  this.loginService.logar(this.login).subscribe({

next: token => {
this.loginService.addToken(token);
  this.router.navigate(['emissor'])

},
error: erro =>{

console.log("deu ruim") 

},

  })
    
}
 }