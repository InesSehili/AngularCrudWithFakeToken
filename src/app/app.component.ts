import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddDialogModelComponent} from "./add-dialog-model/add-dialog-model.component";
import {ApiService} from "./services/api.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }


}
