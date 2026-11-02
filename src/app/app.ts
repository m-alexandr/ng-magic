import { ChangeDetectionStrategy, Component, DoCheck, signal } from '@angular/core';
import { ANode } from './a-node/a-node';

@Component({
  selector: 'app-root',
  imports: [ANode],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements DoCheck {
  ngDoCheck(): void {
    console.log('ngDoCheck app')
  }


  protected clickMagic() {
    console.log('clickMagic app')
  }
}
