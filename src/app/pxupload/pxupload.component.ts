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
        console.log(this.data);
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
      this.router.navigateByUrl('/registered');
    });
  }

  back(): void
  {
    this.location.back();
  }

}