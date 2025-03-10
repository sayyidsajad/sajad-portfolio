import { Component } from '@angular/core';
import { NavbarComponent } from "./src/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'SAJAD';
}
