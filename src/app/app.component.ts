import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './modules/core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private authServ: AuthService, private storage: Storage) {
    // this.authServ.isLoggedIn().subscribe(state => {
    //   if (state) {
    //     this.router.navigate(['home']);
    //   } else {
    //     this.router.navigate(['login']);
    //   }
    // });
  }

  async ngOnInit(){
    await this.storage.create();
  }
}
