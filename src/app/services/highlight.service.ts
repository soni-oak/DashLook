import { Injectable } from '@angular/core';
import { Stat } from '../Stat';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  private baseUrl: string = "https://localhost:7223/";
  constructor(private http: HttpClient) { }

  getHighlights( data: any): Observable<JSON>{
    const url = this.baseUrl + "api/paytm/stats";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<JSON>(url,data,{ headers: headers });

  }

  // getHighlights( data: any): Observable<JSON>{
  //   const url = this.baseUrl + "api/paytm/stats";
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
    
  //   return interval(5000).pipe(
  //     switchMap(() => this.http.post<JSON>(url, data, { headers: headers }))
  //   );
  // }


}
