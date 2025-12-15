import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from '../../../../+shared/services/products.service';
import { MatIcon } from "@angular/material/icon";
import { Product } from '../../../../+shared/models/product.model';
import { MatButton } from "@angular/material/button";
import { PrivateProductComponent } from "./private-product/ui/private-product.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-private-products',
  styleUrl: './private-products.component.scss',
  templateUrl: './private-products.component.html',
  imports: [
    MatProgressBarModule,
    MatTableModule,
    MatIcon,
    MatButton,
    PrivateProductComponent
  ],
})
export class PrivateProductsComponent implements OnInit {
  ngOnInit(): void {
    this.refresh();

  }

  action = 'list';
  selected: Product | undefined;
  selectedId: string = '';
  busy = false;
  ok(product: Product) {
    if (this.action == 'create') {
      this.busy = true;
      this.productsService.add(product).subscribe(res => {
        this.refresh();
        this.action = 'list';
        this.busy = false;

      });

    }
    else if (this.action == 'edit') {
      this.busy = true;
      this.productsService.edit(this.selectedId, product).subscribe(res => {
        this.refresh();
        this.action = 'list';
        this.busy = false;
      });
    }
    else if (this.action == 'delete') {
      this.busy = true;
      this.productsService.remove(this.selectedId).subscribe(res => {
        this.refresh();
        this.action = 'list';
        this.busy = false;
      });

    }

  }
  cansel() {
    this.action = 'list';
  }
  refresh() {
    this.busy = true;
    this.productsService.list().subscribe(r => {
      this.dataSource = r;
      this.busy = false;
    });
  }

  create() {
    this.selected = undefined;
    this.action = 'create';
  }
  edit(product: Product) {
    this.selected = { ...product };
    this.selectedId = product.id;
    this.action = 'edit';
    console.log(this.action);

  }
  delete(product: Product) {
    this.selected = { ...product };
    this.selectedId = product.id;
    console.log(product);
    this.action = 'delete';

  }


  productsService = inject(ProductsService);
  displayedColumns: string[] = ['name', 'price', 'description', 'imageUrl', 'actions'];

  dataSource: any;
}
