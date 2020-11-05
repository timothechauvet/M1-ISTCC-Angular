import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarRental';
  view = 'none';

  onSelectRent(): void {
    this.view = 'rent';
  }

  onSelectGive(): void {
    this.view = 'give';
  }
}
