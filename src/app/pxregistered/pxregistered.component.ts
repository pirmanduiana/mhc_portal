import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pxregistered',
  templateUrl: './pxregistered.component.html',
  styleUrls: ['./pxregistered.component.css']
})
export class PxregisteredComponent {

  formGroup: FormGroup;
  public data_registered: any;
  public user: any;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ){
    this.formGroup = new FormGroup({
      date: new FormControl(''),
      name: new FormControl(''),
    });
  }

  ngOnInit(){
    this.getRegPasien();
    this.user = JSON.parse(localStorage.getItem('login_data') || "{}");
  }

  getRegPasien(q: string=""):void {
    this.authService.getRegPasien(q).subscribe(result => {
      this.data_registered = result.datas;
      if (this.data_registered.length==0) {
        this.snackBar.open("Data not found", 'dismiss', {
          duration: 2000
        });
      }
    });
  }

  viewDetail(id: number, type: string): void
  {
    let map_type = [
      {
        'class' : 'App\\Mstclientemployee',
        'value': 'karyawan'        
      },
      {
        'class' : 'App\\Mstclientemployeemember',
        'value' : 'tanggungan'
      }
    ];
    let choosen = map_type.find(i=>i.class === type)?.value;
    this.router.navigate(['/find', id, choosen]);
  }

  viewUploadBill(registered_id: number):void
  {
    this.router.navigate(['/registered', registered_id]);
  }

  applySearch(val: string): void
  {
    this.getRegPasien(val);
  }

}
