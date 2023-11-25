import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

import { HomeComponent } from './pages/home/home.component';
import { HomeServices } from './pages/home/services/home.service';
import { HomeModule } from './pages/home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'pobeda';

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
}

