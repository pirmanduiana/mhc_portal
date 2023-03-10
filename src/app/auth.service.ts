import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  	providedIn: 'root'
})

export class AuthService {

	public is_login: boolean = false;

	constructor(
		private http:HttpClient,
	) {}

	login(data: any):Observable<any>{
		return this.http.post(environment.apiUrl + "login", data);
	}

	getUser():Observable<any>{
		return this.http.get(environment.apiUrl + "user");
	}

	logout():Observable<any>{
		return this.http.post(environment.apiUrl + "logout", null);
	}

	getPasien(q: string):Observable<any>{
		return this.http.get(environment.apiUrl + "provider/get-pasien?q=" + q);
	}

	getDetailPx(id: number, type: string):Observable<any>{
		return this.http.get(environment.apiUrl + "provider/get-pasien/" + id + "/" + type);
	}

	regPasien(type: string, id: number):Observable<any>{
		return this.http.get(environment.apiUrl + "provider/reg-pasien?type=" + type + "&id=" + id);
	}

	getRegPasien(q: string, page: number, limit: number):Observable<any>{
		return this.http.get(environment.apiUrl + "provider/registered-pasien?q=" + q + "&page=" + page + "&limit=" + limit);
	}

	getRegById(id: number):Observable<any>{
		return this.http.get(environment.apiUrl + "provider/get-reg/" + id);
	}

	postBillPasien(body: any):Observable<any>{
		return this.http.post(environment.apiUrl + "provider/bill-pasien", body);
	}

	getAbout():Observable<any>{
		return this.http.get(environment.apiUrl + "about");
	}

	isLoggedIn():boolean {
		this.is_login = localStorage.getItem('login_data') != null;
		if (this.is_login) {
            return true;
        }
		return false;
	}
}
