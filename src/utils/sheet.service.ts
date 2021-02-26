import {Injectable} from '@angular/core';
import {GoogleSheetsDbService} from 'ng-google-sheets-db';
import {environment} from '../environments/environment';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {

  }

  addRow() {
    const attributesMapping = {
      id: 'ID',
      email: 'Email Address',
      pay: 'test'
    };


    this.googleSheetsDbService.get('1vTAKV4IjGBc369dqmvfk9Ea0NgFZMH4viomNzvDjHJ',
      1,
      attributesMapping)
      .subscribe(res => console.log(res))
  }

  initGoogleOAuth(): Promise<any> {
    return new Promise((resolve, reject) => {
      gapi.load('auth2', async () => {
        const gAuth = await gapi.auth2.init({
          client_id: environment.GAPI_CLIENT_ID,
          fetch_basic_profile: true,
          scope: 'profile email'
        });
        resolve(gAuth);
      }, reject);
    });
  }

  async listMajors() {
    const auth = await this.initGoogleOAuth()
    console.log(auth)
    const sheets = gapi.sheets({version: 'v4', auth});
    sheets.spreadsheets.values.get({
      spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      range: 'Class Data!A2:E',
    }, (err: any, res: any) => {
      if (err) {
        return console.log('The API returned an error: ' + err);
      }
      const rows = res.data.values;
      if (rows.length) {
        console.log('Name, Major:');
        // Print columns A and E, which correspond to indices 0 and 4.
        rows.map((row: any) => {
          console.log(`${row[0]}, ${row[4]}`);
        });
      } else {
        console.log('No data found.');
      }
    });
  }
}
