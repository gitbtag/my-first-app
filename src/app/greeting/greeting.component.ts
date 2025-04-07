import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
name='angular';
count=0;

sayHello(){
  alert('Hello from ${this.name}!');
}
}
