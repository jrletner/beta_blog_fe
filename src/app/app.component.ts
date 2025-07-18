import { Component } from '@angular/core';
import { RouterOutlet } from '../../node_modules/@angular/router/router_module.d-Bx9ArA6K';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
