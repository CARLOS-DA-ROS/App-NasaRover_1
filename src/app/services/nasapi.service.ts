import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasapiService {
  constructor( private http: HttpClient){}

  getapi(){ return this.http.get('https://api.nasa.gov/planetary/apod?api_key=UeM59m7JcGMCOfOHz1uPTAbnEeqi1Qfts7O49NJV'); }

  getapi0( qq, yy: number){
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${ qq }/photos?sol=${ yy }&page=1&api_key=UeM59m7JcGMCOfOHz1uPTAbnEeqi1Qfts7O49NJV`;
     return this.http.get(url)
     .pipe( map ( data => data['photos']));
   }

  getapi1( qq, yy, kk){
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${ qq }/photos?sol=${ yy }&camera=${ kk }&page=1&api_key=UeM59m7JcGMCOfOHz1uPTAbnEeqi1Qfts7O49NJV`;
     return this.http.get(url)
     .pipe( map ( data => data['photos']));
   }

  getapi2( qq, yy, kk){
   const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${ qq }/photos?earth_date=${ yy }&camera=${ kk }&page=1&api_key=UeM59m7JcGMCOfOHz1uPTAbnEeqi1Qfts7O49NJV`;
    return this.http.get(url)
    .pipe( map ( data => data['photos']));
  }
}
