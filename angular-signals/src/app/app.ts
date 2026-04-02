import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  firstNumber_str = signal('0');
  secondNumber_str = signal('0');
  operation_str = signal('add');

  result = computed(() => {
    let num1 = Number.parseFloat(this.firstNumber_str());
    let num2 = Number.parseFloat(this.secondNumber_str());
    let operation = this.operation_str();

    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        return num2 !== 0 ? num1 / num2 : 'Number 2 cannot be zero';
      default:
        return 'select an operation';
    }
  });

  firstName_str = signal('');
  secondName_str = signal('');
  lastName_str = signal('');

  fullName = computed(() => {
    let firstName = this.firstName_str();
    let secondName = this.secondName_str();
    let lastName = this.lastName_str();
    return firstName + ' ' + secondName + ' ' + lastName;
  });

  constructor() {
    effect(() => {
      const oldFirstNumber = sessionStorage.getItem('firstNumber') || '0';
      const oldSecondNumber = sessionStorage.getItem('secondNumber') || '0';
      const oldOperation = sessionStorage.getItem('operation') || 'add';

      const oldFirstName = sessionStorage.getItem('firstName') || '';
      const oldSecondName = sessionStorage.getItem('secondName') || '';
      const oldLastName = sessionStorage.getItem('lastName') || '';

      const newFirstNumber = this.firstNumber_str();
      const newSecondNumber = this.secondNumber_str();
      const newOperation = this.operation_str();

      const newFirstName = this.firstName_str();
      const newSecondName = this.secondName_str();
      const newLastName = this.lastName_str();

      if (oldFirstNumber !== newFirstNumber) {
        console.log('First Number changed FROM: ' + oldFirstNumber + ' TO: ' + newFirstNumber);
      }
      if (oldSecondNumber !== newSecondNumber) {
        console.log('Second Number changed FROM: ' + oldSecondNumber + ' TO: ' + newSecondNumber);
      }
      if (oldOperation !== newOperation) {
        console.log('Operation changed FROM: ' + oldOperation + ' TO: ' + newOperation);
      }   
      
      if (oldFirstName !== newFirstName) {
        console.log('First Name changed FROM: ' + oldFirstName + ' TO: ' + newFirstName);
      } 
      if (oldSecondName !== newSecondName) {
        console.log('Second Name changed FROM: ' + oldSecondName + ' TO: ' + newSecondName);
      }
      if (oldLastName !== newLastName) {
        console.log('Last Name changed FROM: ' + oldLastName + ' TO: ' + newLastName);
      }

      sessionStorage.setItem('firstNumber', newFirstNumber);
      sessionStorage.setItem('secondNumber', newSecondNumber);
      sessionStorage.setItem('operation', newOperation);

      sessionStorage.setItem('firstName', newFirstName);
      sessionStorage.setItem('secondName', newSecondName);
      sessionStorage.setItem('lastName', newLastName);
    });
  }
}