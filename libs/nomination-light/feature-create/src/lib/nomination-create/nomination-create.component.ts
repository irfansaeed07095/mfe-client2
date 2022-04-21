import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nomination-create',
  templateUrl: './nomination-create.component.html',
  styleUrls: ['./nomination-create.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NominationCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
