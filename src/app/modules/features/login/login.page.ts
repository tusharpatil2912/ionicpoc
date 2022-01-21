import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/data/user';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //spinnerOff = true;

  constructor(private authServ: AuthService,private toastCtl: ToastController,private router: Router, private loadingCtl: LoadingController) { }

  ngOnInit() {
 
  }

  login(form){
    //this.spinnerOff = false;
    this.toastCtl.create({
      message: "Logged in Successfully",
      color: "success",
      duration: 2000
    });
    this.loadingCtl.create({
      message: 'Logging In'
    }).then(lc=> lc.present());

    this.authServ.login(form.value).subscribe((data)=>{
      this.loadingCtl.dismiss();
      form.reset();
      //this.spinnerOff = true;
      this.router.navigateByUrl('/');
    },(err)=>{
      //console.log(err);
      this.loadingCtl.dismiss();
      this.toastCtl.create({
        message: err.error.message,
        color: "danger",
        duration: 2000
      }).then(t=> t.present());
      //this.spinnerOff = true;
    });
    
  }

}
