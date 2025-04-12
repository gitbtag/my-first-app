import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
name='angular';
count=0;
showMessage=true;
users= ['ali','Nilufar','btag','mohammad','Shahla'];

sayHello(){
  alert('Hello from ${this.name}!');
}
}
