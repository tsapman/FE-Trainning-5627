import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-displayfirst-two-albums',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './displayfirst-two-albums.component.html',
  styleUrl: './displayfirst-two-albums.component.scss'
})
export class DisplayfirstTwoAlbumsComponent {

}
