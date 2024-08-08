import { Component , Input} from '@angular/core';
import { AppComponent } from "../app.component";

// home.component.ts
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent], // AppComponent-i buraya daxil edin
  template: `
    <!-- Property Binding (Xüsusiyyət Bağlaması) -->
    <div>{{ name }}</div> <!-- Burada 'name' xüsusiyyəti göstərilir -->
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() name: string; // @Input() dekoratoru ilə 'name' xüsusiyyəti 'AppComponent'-dən daxil edilir
}
