import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
import { ReceiptItemComponent } from './receipt-item/receipt-item.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InvoiceItemComponent, ReceiptItemComponent, ItemListComponent],
})
export class SharedUiModule {}
