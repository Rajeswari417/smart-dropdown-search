import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    baseUrl = 'http://localhost:3000';
    private countryListLenght = new Subject<number>();


    setListCount(value: number) {
        this.countryListLenght.next(value);
    }

    getListCountry(): Observable<number> {
        return this.countryListLenght.asObservable();
    }

    constructor(private http: HttpClient) { }

    GETRequest(): Observable<any> {
        return this.http.get(this.baseUrl + '/listcountries')
    }

    POSTRequest(countryName: string): Observable<any> {

        const body = new HttpParams()
            .set('name', countryName)

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        const options = {
            headers: headers
        };

        return this.http.post(this.baseUrl + '/add', body, options)
    }
}
