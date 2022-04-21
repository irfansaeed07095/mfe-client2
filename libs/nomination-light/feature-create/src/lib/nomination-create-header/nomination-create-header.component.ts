import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nomination-create-header',
  templateUrl: './nomination-create-header.component.html',
  styleUrls: ['./nomination-create-header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NominationCreateHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
