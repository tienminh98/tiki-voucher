import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { EventManager } from '../../core/util/event-manager.service';

@Component({
  standalone: true,
  selector: 'jhi-footer',
  templateUrl: './footer.component.html',
  imports: [
    RouterLink,
    NzIconDirective,
    RouterLinkActive
  ]
})
export default class FooterComponent {
  constructor(private eventManager: EventManager) {
  }

  onOpenChatBox(): void {
    this.eventManager.broadcast('open-chat');
  }
}
