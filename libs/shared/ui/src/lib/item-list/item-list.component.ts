import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
