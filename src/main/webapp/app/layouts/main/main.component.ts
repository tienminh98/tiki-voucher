import { Component, OnInit, RendererFactory2, Renderer2, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import dayjs from 'dayjs/esm';

import { AccountService } from 'app/core/auth/account.service';
import { AppPageTitleStrategy } from 'app/app-page-title-strategy';
import FooterComponent from '../footer/footer.component';
import PageRibbonComponent from '../profiles/page-ribbon.component';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs/operators';
import { EventManager } from '../../core/util/event-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'jhi-main',
  standalone: true,
  templateUrl: './main.component.html',
  providers: [AppPageTitleStrategy],
  imports: [RouterOutlet, FooterComponent, PageRibbonComponent, NgIf]
})
export default class MainComponent implements OnInit, OnDestroy {
  showFooter = false;
  showChatIcon: boolean = false;
  isScriptLoaded = false;

  subscription = new Subscription();


  private renderer: Renderer2;

  constructor(
    private router: Router,
    private appPageTitleStrategy: AppPageTitleStrategy,
    private accountService: AccountService,
    private translateService: TranslateService,
    private renderer2: Renderer2,
    private eventManager: EventManager,
    rootRenderer: RendererFactory2,
  ) {
    this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentUrl = event.url;
      this.showFooter = !(currentUrl.includes('/login') || currentUrl.includes('/register') || currentUrl === '/');
      this.showChatIcon = !(currentUrl.includes('/login') || currentUrl.includes('/register'));
      this.showChatIcon && this.loadCrispChat();
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

    this.subscription.add(
      this.eventManager.subscribe('open-chat', _ => {
        console.log('day r');
        this.openChatWindow();
      })
    )
  }
  loadCrispChat() {
    setTimeout(() => {
      if (!this.isScriptLoaded) {
        (window as any).$crisp = [];
        (window as any).CRISP_WEBSITE_ID = "648c8662-b0ab-48fe-94d7-79dc9f3747b2";
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = Boolean(1);
        this.renderer.appendChild(d.getElementsByTagName("head")[0], s);

        s.onload = () => {
          this.modifyCrispChatIcon();
          this.isScriptLoaded = true;
        };
      }
    })
  }

  modifyCrispChatIcon() {
    const interval = setInterval(() => {
      const crispChatElement = document.querySelector('.crisp-client');
      if (crispChatElement) {
        const chatIcons = crispChatElement.querySelectorAll('.cc-1yy0g .cc-1m2mf');
        chatIcons.forEach((element) => {
          const htmlElement = element as HTMLElement;
          htmlElement.style.setProperty('bottom', '65px', 'important');
          // htmlElement.style.setProperty('display', this.showChatIcon ? 'block' : 'none', 'important');
        });
        clearInterval(interval);
      }
    }, 2000);
  }

  openChatWindow() {
    this.loadCrispChat();
    if (typeof (window as any).$crisp !== 'undefined') {
      (window as any).$crisp.push(['do', 'chat:open']);
    } else {
      console.error('Crisp chat is not initialized.');
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
