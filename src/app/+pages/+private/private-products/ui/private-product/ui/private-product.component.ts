import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'
import { Product } from '../../../../../../+shared/models/product.model';

@Component({
  selector: 'app-private-product',
  imports: [
    MatButton,
    MatInputModule,
    MatFormFieldModule,
    FormsModule

  ],
  templateUrl: './private-product.component.html',
  styleUrl: './private-product.component.scss'
})
//onchang harvaght ke inputha tagheer kone rokh midan
export class PrivateProductComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.current) {
      this.data=this.current;
    }
  }

  @Output() onCansel = new EventEmitter();
  @Output() onOk = new EventEmitter<Product>();
  @Input() current: Product | undefined;
  @Input() action:string='';
  data: Product = { id: 0, name: '', description: '', price: 0, imageUrl: '' };
  ok() {
    this.onOk.emit(this.data);
  }

}
