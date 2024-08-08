import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'; // FormsModule-i import edin

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HomeComponent], // FormsModule-i buraya əlavə edin
  template: `
    <!-- Text Interpolation (Mətn İnterpolasiyası) -->
    <!-- <div>{{ title }}</div> -->

    <!-- Two-Way Data Binding (İki tərəfli məlumat bağlaması) -->
    <!-- <input [(ngModel)]="name" /><br />
    <input [(ngModel)]="name" /><br />
    {{ name }} -->

    <!-- Property Binding (Xüsusiyyət bağlaması) -->
    <!-- <app-home [name]="name"></app-home> -->

    <!-- Message Display (Mesajın Göstərilməsi) -->
    <p>{{ message }}</p>
    <!-- 'message' dəyişənini göstərir -->

    <!-- Event Binding (Hadisə Bağlaması) -->
    <button (click)="onClick()">Click Me</button>
    <!-- 'click' hadisəsi ilə 'onClick' metodunu çağırır -->
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Binding'; // title dəyişəni üçün mətn interpolasiyası
  @Input() name: string; // name xüsusiyyəti üçün iki tərəfli məlumat bağlaması və xüsusiyyət bağlaması
  message = 'Henüz tıklanmadı'; // Başlanğıc mesajı

  // Hadisə bağlaması ilə çağırılan metod
  onClick() {
    this.message = 'Düğmeye tıklandı!'; // 'message' dəyişəninin dəyərini dəyişir
  }
}
