import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-aula-220524',
  standalone: true,
  imports: [],
  templateUrl: './aula-220524.component.html',
  styleUrl: './aula-220524.component.css'
})
export class Aula220524Component implements OnInit, OnDestroy {
  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe({
      next: (n: number) => { console.log(n); },
      error: (e: any) => { console.error(e); },
      complete: () => { console.log('complete'); }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
