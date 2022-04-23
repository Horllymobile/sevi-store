import { Observable } from './../../../../node_modules/@firebase/util/dist/node-esm/src/subscribe.d';
import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  // isMobile$: Observable<BreakpointState>
  isMobile: boolean;
  isMedium: boolean;
  isDesktop: boolean;

  constructor(private breakPointObserver: BreakpointObserver) {
    this.isMobile = this.breakPointObserver.isMatched([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ]);
    this.isMedium = this.breakPointObserver.isMatched([Breakpoints.Medium]);
    this.isDesktop = this.breakPointObserver.isMatched([
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]);
    // this.isMobile$ = this.breakPointObserver.observe([Breakpoints.Small]);
  }
}
