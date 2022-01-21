import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { from } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  loggedInUser: any;
  imgSrc: string = "../../../../assets/icon/favicon.png";

  public appPages = [
    { title: 'Dashboard', url: '/home', icon: 'home' },
    { title: 'Releases', url: '/home/release', icon: 'rocket' },
    { title: 'Projects', url: '/home/project', icon: 'briefcase' },
    { title: 'Tasks', url: '/home/task', icon: 'file-tray-full' },
    { title: 'Peer Review', url: '/home/peer-review', icon: 'chatbubbles' },
    { title: 'Reports', url: '/home/report', icon: 'easel' }
  ];

  constructor(private authServ: AuthService, private router: Router, private storage: Storage) {
  }

  ngOnInit() {
    from(this.storage.get('currentUser')).pipe(
      take(1),
      map(user=>{
        this.loggedInUser =user;
        console.log(this.loggedInUser);
      })
    )
  }

  signOut() {
    this.authServ.logout().then(t => {
      this.router.navigateByUrl('/login');
    })
  }

}
