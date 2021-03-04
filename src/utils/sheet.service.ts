import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private http: HttpClient) {

  }

  addRow() {
    const attributesMapping = {
      name: 'test',
      email: 'Email Address',
      pay: 'test'
    };
    const url = 'https://script.google.com/macros/s/AKfycbygYHynmMz9aSUYniI6v3xpwXrA5qOY-yoXnJwTF1Xarb8JXYwpoJ3t3yvemoMZC6U/exec'
    this.http.post(url, {attributesMapping})
      .subscribe(res => {
        console.log(res)
      })

  }


}
