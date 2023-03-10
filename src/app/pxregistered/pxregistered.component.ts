import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public user: any;
  public data_registered: any;
  public search_val: string = "";
  public paginator = {"page": 1, "limit": 2, "total_data": 0, "last_page": 0};

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ){
    this.formGroup = new FormGroup({
      name: new FormControl('')
    });
  }

  ngOnInit(){
    this.getRegPasien();
    this.user = JSON.parse(localStorage.getItem('login_data') || "{}");
  }

  getRegPasien(q: string=""):void {
    this.authService.getRegPasien(q, this.paginator.page, this.paginator.limit).subscribe(result => {
      console.log(result.datas);
      this.data_registered = result.datas.data;
      this.paginator.total_data = result.datas.total;
      this.paginator.last_page = result.datas.last_page;
      if (this.data_registered.length==0) {
        this.snackBar.open("Data not found", 'dismiss', {
          duration: 2000
        });
      }
    });
  }

  onPrevious(): void {
    this.paginator.page --;
    this.getRegPasien(this.search_val);
  }

  onNext(): void {
    this.paginator.page ++;
    this.getRegPasien(this.search_val);
  }

  viewDetail(id: number, type: string): void
  {
    let map_type = [
      {'class' : 'App\\Mstclientemployee', 'value': 'karyawan'},
      {'class' : 'App\\Mstclientemployeemember', 'value' : 'tanggungan'}
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
    this.search_val = val;
    this.paginator.page = 1;
    this.getRegPasien(val);
  }

}
