import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'auth.component.html'
})
export class AuthComponent {
  public username: string | undefined;
  public password: string | undefined;
  public errorMessage: string | undefined;

  constructor(private router: Router) {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      // Выполнить аутентификацию
      this.router.navigateByUrl("/admin/main");
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }

}
