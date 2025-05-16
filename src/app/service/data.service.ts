import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../photos';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  public photos: Photos[] = [];
  public photosEndpoint : string = 'https://jsonplaceholder.typicode.com/photos';
  

  constructor(private http: HttpClient) { }

    getAllPhotos() : Observable<Photos[]>  {
      return this.http.get<Photos[]>(this.photosEndpoint);
    }


  
}


