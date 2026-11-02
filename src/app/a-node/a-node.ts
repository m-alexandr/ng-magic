import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { BNode } from '../b-node/b-node';

@Component({
  selector: 'app-a-node',
  imports: [
    BNode
  ],
  templateUrl: './a-node.html',
  styleUrl: './a-node.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ANode implements DoCheck {

  counterA = 0;

  constructor() {

    setInterval(() => this.counterA = this.counterA + 1, 1000)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck A')
  }

  protected clickMagic() {
    console.log('click a')
  }
}
