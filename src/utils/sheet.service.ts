import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private http: HttpClient) {

  }

  addRow(postData: any) {
    const url = 'https://script.google.com/macros/s/AKfycbygYHynmMz9aSUYniI6v3xpwXrA5qOY-yoXnJwTF1Xarb8JXYwpoJ3t3yvemoMZC6U/exec'
    return this.http.post(url, postData, {
      headers:
        {
          'Content-Type': 'text/plain;charset=utf-8'
        }
    })
  }

  addRowAWSWay(postData: any) {
    const url = 'https://hssyzjzatf.execute-api.us-west-2.amazonaws.com/default/hsk_booking_endpoint'
    this.http.post(url, {data: postData}, {headers: {mode: 'no-cors'}})
      .subscribe(res => {
        console.log(res)
      })
  }

  addRowToForm(postData: any) {
    const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-v4uJsjmqFe5Di7mf1g3I2YjroUmrrY-kKMLtjBU93Snj-Q/formResponse'
    const data = {
      'entry.502316831': 'add by hsk landing',
      'entry.1720904203': 'add by hsk landing',
      'entry.806708941': 'add by hsk landing',
      'entry.841251610': 'add by hsk landing'
    }
    this.http.post(url, data)
      .subscribe(res => {
        console.log(res)
      })
  }

}
