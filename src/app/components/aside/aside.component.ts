import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.sass',
})
export class AsideComponent {}
