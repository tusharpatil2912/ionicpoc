import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public appPages = [
    { title: 'Dashboard', url: '/home', icon: 'home' },
    { title: 'Releases', url: '/home/release', icon: 'rocket' },
    { title: 'Projects', url: '/home/project', icon: 'briefcase' },
    { title: 'Tasks', url: '/home/task', icon: 'file-tray-full' },
    { title: 'Peer Review', url: '/home/peer-review', icon: 'chatbubbles' },
    { title: 'Reports', url: '/home/report', icon: 'easel' }
  ];

  constructor() {}

}
