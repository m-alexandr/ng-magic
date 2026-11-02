import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { CNode } from '../c-node/c-node';

@Component({
  selector: 'app-b-node',
  imports: [
    CNode
  ],
  templateUrl: './b-node.html',
  styleUrl: './b-node.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BNode implements DoCheck {

  counterB = 0;

  constructor() {
    setInterval(() => this.counterB = this.counterB + 1, 1000)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck b')
  }

}
