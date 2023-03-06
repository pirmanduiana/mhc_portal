import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent {

  public data_clients: any;
  private search_value: string="";

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ){};

  applySearch(val: string): void
  {
    this.authService.getPasien(val).subscribe(result => {
      this.data_clients = result.datas;
      this.search_value = val;
    });
  }

  regPasien(type: string, id: number): void
  {
    this.authService.regPasien(type, id).subscribe(result => {
      this.applySearch(this.search_value);
      this.snackBar.open(result.message, 'done', {
        duration: 800
      });
    })
  }
}
