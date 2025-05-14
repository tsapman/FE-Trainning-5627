import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../photos';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  photos: Photos[] = [];
  

  constructor(private http: HttpClient) { }

    getAllPhotos() : Observable<Photos[]>  {
      return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos');
    }


  
}


