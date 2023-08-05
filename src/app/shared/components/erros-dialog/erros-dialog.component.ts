import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-erros-dialog',
  templateUrl: './erros-dialog.component.html',
  styleUrls: ['./erros-dialog.component.scss']
})
export class ErrosDialogComponent implements OnInit{
  constructor(@Inject(DIALOG_DATA) public data: string) {}

  ngOnInit(): void{}
}
