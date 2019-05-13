import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private titleSource = new BehaviorSubject('');
  currentTitle = this.titleSource.asObservable();

  constructor() { }

  changeTitle(title: string) {
    this.titleSource.next(title)
  }
}
