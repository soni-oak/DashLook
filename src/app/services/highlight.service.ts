import { Injectable } from '@angular/core';
import { Stat } from '../Stat';
import { Observable, map, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Model } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  private baseUrl: string = "https://localhost:7223";
  company = "paytm"
  constructor(private http: HttpClient) { }

  getHighlights( data: any): Observable<JSON>{
    const url =  `${this.baseUrl}/api/${this.company}/stats`;
    console.log(url);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<JSON>(url,data,{ headers: headers });

  }

  getModels(): Observable<Model[]> {
    const url =  `${this.baseUrl}/api/${this.company}/models`;
    console.log(url);
    return this.http.post<any[]>(url, {}).pipe(
      map(data =>
        
        data.map(item => ({
          displayName: item.text,
          value: item.value,
          company: this.company
        } as Model))
      )
    );
    
  }


}
