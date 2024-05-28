import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

export const routeAnimationTrigger = trigger('routeAnimationTrigger', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(500)
  ]),
]);

/**
 * Animation trigger for fading in an item.
 */
export const fadeInTrigger = trigger('fadeInItem', [
  transition(':enter', [
    query(':self', [
      style({ opacity: 0, scale: 0 }),
      stagger(100, [
        animate('150ms', style({ opacity: 1, scale: 1 }))
      ])
    ])
  ])
]);