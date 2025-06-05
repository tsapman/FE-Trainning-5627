import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-user-name',
  standalone: true,
  imports: [CommonModule,DisplayComponent],
  templateUrl: './user-name.component.html',
  styleUrl: './user-name.component.scss'
})
export class UserNameComponent {
  @Input() userName: string ='';
  public actualUserName: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userName']) {
      this.actualUserName = `${this.userName}`;
    }

  }

}
