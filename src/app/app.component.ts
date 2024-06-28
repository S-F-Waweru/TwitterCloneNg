import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DisplayPostsComponent } from './display-posts/display-posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TwitterCloneNg';
}
