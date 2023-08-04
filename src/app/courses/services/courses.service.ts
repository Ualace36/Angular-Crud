import { CoursesComponent } from './../courses/courses.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(public httpClient: HttpClient) {}

    findAll (): Observable<any>{
      return this.httpClient.get <Course[]>(this.API).pipe(delay(5000))
      ;
    }
   }

