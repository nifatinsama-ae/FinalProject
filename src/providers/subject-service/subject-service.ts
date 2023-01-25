import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subjects } from '../../models/subjects';
import { Observable } from 'rxjs/observable';

@Injectable()
export class SubjectServiceProvider {

  apiKey = 'http://192.168.10.60/data_api/get_subject.php';

  constructor(public http: HttpClient) {
  }

  getSubject():Observable<Subjects[]>{
    return this.http.get<Subjects[]>(this.apiKey);
  }

}