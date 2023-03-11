import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pxupload',
  templateUrl: './pxupload.component.html',
  styleUrls: ['./pxupload.component.css']
})
export class PxuploadComponent {

  public id: any;
  public data: any = {};
  public regable: any = {};
  public status: number = 2;
  public file_bill: string = "";
  public image_path: any;
  public submit_disabled: boolean = true;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private _sanitizer: DomSanitizer,
    private snackBar: MatSnackBar
  ){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.authService.getRegById(this.id).subscribe(result => {
        this.data = result.datas;
        this.regable = result.datas.regable;
      });
    });
  }

  handleUpload(event: any): void
  {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file_bill = reader.result as string;
      this.image_path = this._sanitizer.bypassSecurityTrustResourceUrl(this.file_bill);
      this.submit_disabled = false;
    }
  }

  upload(): void
  {
    let body = {
      'id': this.id,
      'status': this.status,
      'file_bill': this.file_bill
    };
    this.authService.postBillPasien(body).subscribe(result => {
      if (result.success) {
        this.router.navigateByUrl('/registered');
      } else {
        this.snackBar.open(result.message, 'dismiss', {
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
        });
        for (let index = 0; index < result.datas.length; index++) {
          setTimeout(() => {
            this.snackBar.open(result.datas[index], 'dismiss', {
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
            });
          }, 1000);
        }
      }
    });
  }

  back(): void
  {
    this.location.back();
  }

}