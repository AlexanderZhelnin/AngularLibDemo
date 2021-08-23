import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-lib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
    <my-lib-item></my-lib-item>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
