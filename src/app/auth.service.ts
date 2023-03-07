import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  	providedIn: 'root'
})

export class AuthService {

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
}
