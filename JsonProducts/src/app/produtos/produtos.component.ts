import { Component, OnInit} from '@angular/core';
import { ProdutossService } from '../produtoss.service';
import { Produt } from 'src/produtoss';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  Produts : Produt[] = [];
  formGroupProduto : FormGroup;
  isEditing: boolean = false;


  constructor(private ProdutossServicee : ProdutossService,
              private formBuilder : FormBuilder
              ){
    this.formGroupProduto = formBuilder.group({
      id : [''],
      nome : [''],
      marca : [''],
      fabricante : [''],
      quantidade : [''],
      Price : ['']
    });
  }

  ngOnInit(): void {
    this.loadProd();
  }

  loadProd(){
    this.ProdutossServicee.getProducts().subscribe(
      {
        next : data => this.Produts = data,
        error : () => console.log("Erro ao chamar o endpoint")
      }
    );
  }

  loadClients(){
    this.ProdutossServicee.loadProd().subscribe(
      {
        next : (data: Produt[]) => this.Produts = data,
        error : () => console.log("Erro ao chamar o endpoint")
      }
    );
  }

  saveClients(){
    this.ProdutossServicee.save(this.formGroupProduto.value).subscribe(
      {
        next : data => {
          this.Produts.push(data);
          this.formGroupProduto.reset();
        }
      }
    );

  
  }

  editing(Produttt: Produt): void {
    this.formGroupProduto.setValue(Produttt);
    this.isEditing = true;
  }

  remove(Produttt: Produt): void {
    this.ProdutossServicee.remove(Produttt).subscribe({
       next: () => this.loadClients()
    });
 }


}
