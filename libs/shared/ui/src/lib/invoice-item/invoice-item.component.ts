import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
