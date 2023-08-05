import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import {Observable, of} from 'rxjs';
import { catchError } from "rxjs/operators";
import { Dialog } from '@angular/cdk/dialog';
import { ErrosDialogComponent } from '../../shared/components/erros-dialog/erros-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable <Course[]>;
  displayedColumns = ['name', 'category'];
  //coursesService : CoursesService;

  constructor(private coursesService: CoursesService,
    public dialog: Dialog
    ) {

   this.courses$ = this.coursesService.findAll()
   .pipe(
    catchError(error => {
      this.onError('Erro em importar dados.')

      return of([])
    })
    ) ;
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrosDialogComponent, {
      minWidth: '300px',
      data: errorMsg
    });
  }
  ngOnInit(): void {

  }
}
