import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-c-node',
  styleUrl: './c-node.css',
  templateUrl: './c-node.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CNode implements DoCheck {
  ngDoCheck(): void {
    console.log('ngDoCheck c')
  }

  protected onClick() {
    console.log('click c node')
  }
}
