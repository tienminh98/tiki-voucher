import { Component, OnInit, RendererFactory2, Renderer2 } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import dayjs from 'dayjs/esm';

import { AccountService } from 'app/core/auth/account.service';
import { AppPageTitleStrategy } from 'app/app-page-title-strategy';
import FooterComponent from '../footer/footer.component';
import PageRibbonComponent from '../profiles/page-ribbon.component';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'jhi-main',
  standalone: true,
  templateUrl: './main.component.html',
  providers: [AppPageTitleStrategy],
  imports: [RouterOutlet, FooterComponent, PageRibbonComponent, NgIf]
})
export default class MainComponent implements OnInit {
  showFooter = false;
  showChatIcon: boolean = false;

  private renderer: Renderer2;

  constructor(
    private router: Router,
    private appPageTitleStrategy: AppPageTitleStrategy,
    private accountService: AccountService,
    private translateService: TranslateService,
    private renderer2: Renderer2,
    rootRenderer: RendererFactory2,
  ) {
    this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentUrl = event.url;
      this.showFooter = !(currentUrl.includes('/login') || currentUrl.includes('/register') || currentUrl === '/');
      this.showChatIcon = !(currentUrl.includes('/login') || currentUrl.includes('/register'));
      this.loadCrispChat();
    });

  }

  ngOnInit(): void {
    // try to log in automatically
    this.accountService.identity().subscribe();
    this.translateService.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {
      this.appPageTitleStrategy.updateTitle(this.router.routerState.snapshot);
      dayjs.locale(langChangeEvent.lang);
      this.renderer.setAttribute(document.querySelector('html'), 'lang', langChangeEvent.lang);
    });
  }
  loadCrispChat() {
    (window as any).$crisp = [];
    (window as any).CRISP_WEBSITE_ID = "ec0b213e-13f9-49d9-bb98-1a667cd8dacd";
    const d = document;
    const s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = Boolean(1);
    this.renderer.appendChild(d.getElementsByTagName("head")[0], s);

    s.onload = () => {
      this.modifyCrispChatIcon();
    };
  }

  modifyCrispChatIcon() {
    // Đợi phần tử chat icon được tạo
    const interval = setInterval(() => {
      const crispChatElement = document.querySelector('.crisp-client');
      if (crispChatElement) {
        // Lấy tất cả các phần tử cần thay đổi
        const chatIcons = crispChatElement.querySelectorAll('[data-full-view="true"] .cc-1yy0g .cc-1m2mf');
        chatIcons.forEach((element) => {
          const htmlElement = element as HTMLElement;
          htmlElement.style.setProperty('bottom', '60px', 'important');
          htmlElement.style.setProperty('display', this.showChatIcon ? 'block' : 'none', 'important');
        });
        clearInterval(interval);
      }
    }, 500);
  }

  checkShowChatIcon() {
    if (this.showChatIcon) {
      this.loadCrispChat();
    } else {
      const crispChatElement = document.querySelector('.crisp-client');
      if (crispChatElement) {
        crispChatElement.remove();
      }
    }
  }
}
