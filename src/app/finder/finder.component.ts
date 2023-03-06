import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent {

  public data_clients: any;
  public search_value: string="";
  private user: any;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ){};

  getExistsResult(): object
  {
    if (localStorage.getItem(this.user.id + "_find_search") != null) {
      return JSON.parse(localStorage.getItem(this.user.id + "_find_search") || "{}");
    }
    return {};
  }

  getExistsSearchValue(): string
  {
    if (localStorage.getItem(this.user.id + "_search_value") != null) {
      return localStorage.getItem(this.user.id + "_search_value") || "";
    }
    return "";
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('login_data') || "{}");
    this.data_clients = this.getExistsResult();
    this.search_value = this.getExistsSearchValue();
  }

  applySearch(val: string): void
  {
    this.authService.getPasien(val).subscribe(result => {
      this.data_clients = result.datas;
      this.search_value = val;
      localStorage.setItem(this.user.id +"_search_value", this.search_value);
      localStorage.setItem(this.user.id +"_find_search", JSON.stringify(this.data_clients));
    });
  }

  viewDetail(id: number): void
  {
    this.router.navigate(['/find', id]);
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
