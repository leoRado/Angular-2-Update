import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-validate',
  templateUrl: 'app/22.mdf.validate.html',
  styles: [`input.ng-invalid {border-left: 5px solid red;}
            input.ng-valid {border-left: 5px solid green;}
  `]
})
export class AppComponent {
    userForm = new FormGroup({
        name: new FormControl(null, [
            Validators.required, 
            Validators.minLength(4), 
            Validators.maxLength(10)
        ]),
        email: new FormControl(),
        address: new FormGroup({
            street: new FormControl(),
            city: new FormControl(),
            postalCode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}'))
        })
    });

    submitUser() {
        console.log(this.userForm.value);
    }
 }
