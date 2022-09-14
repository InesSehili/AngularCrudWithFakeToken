import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryTypeEnum} from "./enum/category-type.enum";
import {ApiService} from "../services/api.service";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-dialog-model',
  templateUrl: './add-dialog-model.component.html',
  styleUrls: ['./add-dialog-model.component.scss']
})
export class AddDialogModelComponent implements OnInit {
  actionBtn : string = 'Save';
  addProductForm! : FormGroup;
  productDateCtrl! : FormControl;
  productNameCtrl! : FormControl;
  categoryTypeCtrl! : FormControl;
  categoryTypeOption! : {
    value: CategoryTypeEnum,
    label : string
  }[];
  freshness!: string;
  freshnessList: string[] = ['New Brand', 'Second Hand', 'Gdim'];
  freshnessCtrl!: FormControl;
  productPriceCtrl!: FormControl;

  constructor( private formBuilder: FormBuilder,
               private apiService : ApiService,
               private matdialogref : MatDialogRef<AddDialogModelComponent>,
               @Inject(MAT_DIALOG_DATA) public editData : any,
  ) { }

  ngOnInit(): void {
    this.initControlForm();
    this.initaddProductForm();
    if (this.editData)
    {
      this.actionBtn = "Update";
      this.addProductForm.controls['productName'].setValue(this.editData.productName);
      this.addProductForm.controls['categProduct'].setValue(this.editData.categProduct);
      this.addProductForm.controls['pricePro'].setValue(this.editData.pricePro);
      this.addProductForm.controls['dateProd'].setValue(this.editData.dateProd);
      this.addProductForm.controls['freshness'].patchValue(this.editData.freshness);
      this.addProductForm.controls['comments'].setValue(this.editData.comments);
    }

  }

  private initControlForm() {
    //this.productPriceCtrl = this.formBuilder.control(Validators.required, Validators.pattern(''), Validators.min(0) );
    this.freshnessCtrl = this.formBuilder.control('New Brand');
    this.productDateCtrl = this.formBuilder.control(Validators.required);
    this.productNameCtrl = this.formBuilder.control('', Validators.required);
    this.categoryTypeCtrl = this.formBuilder.control('', Validators.required);
    this.categoryTypeOption = [
      { value: CategoryTypeEnum.FRUIT, label: 'Fruit' },
      { value: CategoryTypeEnum.VEGETABLE, label: 'Vegetable' },
      { value: CategoryTypeEnum.ELECTRONIC, label: 'Electronic' }
    ];
  }

  OnAddProduct() {
    if(!this.editData)
    {
      if(this.addProductForm.valid)
      {
        this.apiService.AddProduct(this.addProductForm.value).subscribe(
          {
            next: (res) =>{
              alert("product added successfully");
              this.addProductForm.reset();
              this.matdialogref.close('Addproduct');

            },
            error : (err ) =>
            {  alert("Error while adding the product")}
          }
        );
      }

    } else
    {
      console.log(this.addProductForm.value);
        this.apiService.updateProduct(this.addProductForm.value, this.editData.id).subscribe(
          {
            next : (res) => {
              alert("product updated successfully");
              this.matdialogref.close('updateproduct');
            },
            error : (err) => {
              alert(err);
            }
          }
        ) ;
    }


  }

  private initaddProductForm() {
    this.addProductForm = this.formBuilder.group(
      {
        freshness : this.freshnessCtrl,
        productName: this.productNameCtrl,
        categProduct: this.categoryTypeCtrl,
        dateProd: this.productDateCtrl,
        pricePro:  ['', [ Validators.required,
          Validators.pattern("^[0-9]*$")
         ]],
        comments:['', Validators.required]

      }




    );
  }
}
