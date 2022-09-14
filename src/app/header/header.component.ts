import { Component, OnInit } from '@angular/core';
import {AddDialogModelComponent} from "../add-dialog-model/add-dialog-model.component";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
