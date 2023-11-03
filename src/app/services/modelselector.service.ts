import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from '../Models';
import { map } from 'rxjs';
import { Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelselectorService {

  @Input() company: string;

  private baseUrl: string = "https://localhost:7223/";

  constructor(private http: HttpClient) { }

  getModels(): Observable<Model[]> {
    const url: string = this.baseUrl + "api/paytm/models";

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
