import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'})
  };
  constructor(private http: HttpClient) { }

  get():Observable<weather>{
   
   return this.http.get<weather>("http://api.openweathermap.org/data/2.5/weather?q=Roskilde&appid=0bd349ad280a10fce3c59c4a6d71e14b&units=metric");
    
  }
}

interface weather{
  coord:{
    lon:number;
    lat:number;
  }
  weather:[
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ]
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
}
