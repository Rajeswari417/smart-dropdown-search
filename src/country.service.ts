import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    baseUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    GETRequest(): Observable<any> {
        return this.http.get(this.baseUrl + '/listcountries')
    }

    POSTRequest(countryName: string): Observable<any> {
        // const body =  {
        //         "name" : countryName
        //     }
            // const requestHeaders = new HttpHeaders()
            // .set('Content-Type', 'application/x-www-form-urlencoded');

            const body = new HttpParams()
            .set('name', countryName)

            let headers = new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                });
            const options = {
                headers: headers
              };

        return this.http.post(this.baseUrl+'/add', body, options)
    }
}
