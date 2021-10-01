import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{myArray[0].name}}!</h1>`,
  styles: [`h1 { font-family: Arial; }`],
})
export class HelloComponent implements OnInit {
  private array;
  set myArray(value) {
    if (value) {
      this.array = value;
    }
  }

  ngOnInit() {
    console.log('array is', this.array);
  }
}
