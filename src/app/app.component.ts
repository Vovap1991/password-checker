import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  password: string = '';
  passwordStrength: string = '';



  checkPasswordStrength() {

    const password = this.password.trim();

    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /(?=.*[!@#$%^&*]).$/.test(this.password);

    const easy = hasLetters || hasNumbers || hasSymbols;
    const medium = (hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols);
    const strong = hasLetters && hasNumbers && hasSymbols;

if (password === '') {
  this.passwordStrength = 'grey';
} else if (password.length >=1 && password.length < 8) {
  this.passwordStrength = 'red';
} else if (strong) {
  this.passwordStrength = 'strong';
} else if (medium) {
  this.passwordStrength = 'medium';
} else if (easy) {
  this.passwordStrength = 'easy';
}
  }
}