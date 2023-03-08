import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pxregistered',
  templateUrl: './pxregistered.component.html',
  styleUrls: ['./pxregistered.component.css']
})
export class PxregisteredComponent {

  formGroup: FormGroup;
  public data_registered: any;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ){
    this.formGroup = new FormGroup({
      date: new FormControl(''),
      name: new FormControl(''),
    });
  }

  ngOnInit(){
    this.getRegPasien();
  }

  getRegPasien():void {
    this.authService.getRegPasien().subscribe(result => {
      this.data_registered = result.datas;
      if (this.data_registered.length==0) {
        this.snackBar.open("Data not found", 'dismiss', {
          duration: 2000
        });
      }
      console.log(this.data_registered);
    });
  }

  applySearch(val: string=""): void
  {
    if (val.length < 3) {
      this.snackBar.open("Type at least 3 characters or more", 'dismiss', {
        duration: 2000
      });
    } else {
      this.getRegPasien();
    }
  }

}
