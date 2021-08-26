import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SheetService {
  userSheetUrl = 'https://script.google.com/macros/s/AKfycbyNzwQSV2agh1uHyrlmMSEQhZxtZ61EfnNEFDJlvBg-R5nmSO4/exec'

  constructor(private http: HttpClient) {

  }

  addRow(postData: any) {
    const url = 'https://script.google.com/macros/s/AKfycbw3m3F1i57rfYxbjjDLBonjpZiaEEMY8E1vNMyEulHc1vC7WdoCcmgpc33EhILrucNI/exec'

    return this.http.post(url, postData, {
      headers:
        {
          'Content-Type': 'text/plain;charset=utf-8'
        }
    })
  }

  addAsStripePay(postData: any) {
    const url = this.userSheetUrl
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

  addRowFreeClass(postData: any) {
    const url = 'https://script.google.com/macros/s/AKfycbx3nxyFNs7Hu2skYdcq-J8lWMMv8M_-UkIYGr6dQ20rneA6b3OemtkMFC7DQERRFqkxLQ/exec'
    return this.http.post(url, postData, {
      headers:
        {
          'Content-Type': 'text/plain;charset=utf-8'
        }
    })
  }

  getIsPayCount() {
    const url = this.userSheetUrl
    return this.http.get(url)
  }
}
