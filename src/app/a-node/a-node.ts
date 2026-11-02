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
  ngDoCheck(): void {
    console.log('ngDoCheck ANode ')
  }
  counterA = 0

  constructor() {

    setInterval(()=> this.counterA = this.counterA  + 1, 1000)
  }

  protected clickmagic() {
    console.log('click a')
  }
}
