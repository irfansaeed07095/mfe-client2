import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'invoice-item',
  templateUrl: './receipt-item.component.html',
  styleUrls: ['./receipt-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReceiptItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
