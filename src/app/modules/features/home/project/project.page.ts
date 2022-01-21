import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

  projectList: any;

  constructor(private projectServ : ProjectService, private toastCtl : ToastController) { }

  ngOnInit() {
    this.projectServ.getProjecttList().subscribe(
      (data)=>{
        this.projectList =data;
        //console.log(data);
      },
      (error)=>{
        this.toastCtl.create({
          message: "Something Went Wrong",
          color: "danger",
          duration: 2000
        }).then(t=> t.present());
      }
    )
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
