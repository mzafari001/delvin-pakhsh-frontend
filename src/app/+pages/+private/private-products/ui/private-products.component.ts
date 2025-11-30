import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from '../../../../+shared/services/products.service';
import { MatIcon } from "@angular/material/icon";
import { Product } from '../../../../+shared/models/product.model';
import { MatButton } from "@angular/material/button";
import { PrivateProductComponent } from "./private-product/ui/private-product.component";


@Component({
  selector: 'app-private-products',
  styleUrl: './private-products.component.scss',
  templateUrl: './private-products.component.html',
  imports: [MatTableModule, MatIcon, MatButton, PrivateProductComponent],
})
export class PrivateProductsComponent {

  action = 'list';
  selected: Product | undefined;
  selectedId = 0;
  ok(product: Product) {
    if (this.action == 'create') {
      this.productsService.add(product);
    }
    else if (this.action == 'edit') {
      this.productsService.edit(this.selectedId, product);
    }
    else if (this.action == 'delete') {
      this.productsService.remove(this.selectedId);

    }

    this.refresh();
    this.action = 'list';
  }
  cansel() {
    this.action = 'list';
  }
  refresh() {
    this.dataSource = this.productsService.list();
  }

  create() {
    this.selected = undefined;
    this.action = 'create';
  }
  edit(product: Product) {
    this.selected = { ...product };
    this.selectedId = product.id;
    console.log(this.action);
    this.action = 'edit';
  }
  delete(product: Product) {
    this.selected = { ...product };
    this.selectedId = product.id;
    console.log(product);
    this.action = 'delete';

  }


  productsService = inject(ProductsService);
  displayedColumns: string[] = ['name', 'price', 'description', 'imageUrl', 'actions'];

  dataSource = this.productsService.list();
}
