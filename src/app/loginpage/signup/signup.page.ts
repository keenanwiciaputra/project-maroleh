import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minLength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group( {
      email: new FormControl('', Validators.compose( [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose( [
        Validators.minLength(5),
        Validators.required
      ])),
      confirmpassword: new FormControl('', Validators.compose( [
        Validators.minLength(5),
        Validators.required
      ])),
      namadepan: new FormControl('', Validators.compose( [
        Validators.required
      ])),
      namabelakang: new FormControl('', Validators.compose( [
        Validators.required
      ])),
      notelepon: new FormControl('', Validators.compose( [
        Validators.required
      ])),
      tgllahir: new FormControl('', Validators.compose( [

      ])),
      jeniskelamin: new FormControl('', Validators.compose( [

      ])),
      foto: new FormControl('', Validators.compose( [
 
      ])),
      alamat: new FormControl('', Validators.compose( [
 
      ])),
    });
  }

  tryRegister(value) {
    this.authService.registerUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = "Your account has been created. Please log in.";
        this.navCtrl.navigateForward('/login');
      }, err=> {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';

        this.successMessage = '';      });
  }

  onSubmit(form: NgForm){
    console.log(form);

    this.userService.create(form.value).then(res => {
      console.log(res);
      this.navCtrl.navigateForward('/login');
    }).catch(error => console.log(error));

    form.reset();
    //this.router.navigateByUrl('/week10/index');
  }

  goLoginPage() {
    this.navCtrl.navigateBack('');
  }


}
