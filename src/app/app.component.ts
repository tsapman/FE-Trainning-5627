import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { DisplayComponent } from './display/display.component'; // Import DisplayComponent


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,DisplayComponent], // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Album Photo Covers';
  
}



