import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../services/api.service";
import {AddDialogModelComponent} from "../add-dialog-model/add-dialog-model.component";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  title = 'angular-crud';
  displayedColumns: string[] = ['productName', 'categProduct',  'freshness','pricePro', 'dateProd', 'comments', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public constructor(public dialog: MatDialog, private apiservice : ApiService) {
  }
  ngOnInit() {
    this.getAllProduct();
  }

  openAddDialog() {
    this.dialog.open(AddDialogModelComponent,
      {width : '50%'}).afterClosed().subscribe(
      value => {
        if(value==="Addproduct")
          this.getAllProduct();

      }

    );

  }
  getAllProduct(){
    this.apiservice.getProducts().subscribe(
      { next : (res) =>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        },
        error : (err) => {
          console.log(err);
        }}
    );
  }
  editProduct(row : any){
    this.dialog.open(AddDialogModelComponent,
      {
        width : '50%',
        data : row,
      }
    ).afterClosed().subscribe(
      value => {
        if(value ==="updateproduct")
          this.getAllProduct();
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProduct(id: number) {
    this.apiservice.deleteProduct(id).subscribe(
      {
        next: (res) => {
          alert("Produit suprimé avec succes");
          this.getAllProduct();
        },
        error: (err) => {
          alert("error de suppression");
          console.log(err);
        }
      }
    );
  }


}
