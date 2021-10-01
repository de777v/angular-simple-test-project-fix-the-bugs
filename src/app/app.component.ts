import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Micky Maus';
  myArray = [
    { value: 'aa', name: 'aaa' },
    { value: 'bb', name: 'bbb' },
  ];
}
