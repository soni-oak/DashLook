import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: string = 'AllModels';
  title = 'DashLook';

  modelSelected(value: any) {
    this.model = value;
  }
}
