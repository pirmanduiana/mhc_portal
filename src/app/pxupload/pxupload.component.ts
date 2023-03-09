import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pxupload',
  templateUrl: './pxupload.component.html',
  styleUrls: ['./pxupload.component.css']
})
export class PxuploadComponent {

  private id: any;
  public data: any = {};
  public regable: any = {};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService,
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

  back(): void
  {
    this.location.back();
  }

}