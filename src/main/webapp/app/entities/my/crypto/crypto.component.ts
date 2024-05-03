import {Component, ElementRef, ViewChild} from '@angular/core';
import {left} from "@popperjs/core";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {StateStorageService} from "../../../core/auth/state-storage.service";
import {COUNTRY_CODE} from "../../../app.constants";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {MatchingService} from "../../matching/matching.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {AccountService} from "../../../core/auth/account.service";

@Component({
  selector: 'jhi-crypto',
  standalone: true,
  imports: [
    NzFormDirective,
    NzFormItemComponent,
    NzFormControlComponent,
    NzFormLabelComponent,
    ReactiveFormsModule,
    NzColDirective,
    NzInputDirective,
    NzRowDirective,
    NzButtonComponent,
    NzOptionComponent,
    NzSelectComponent,
    NzIconDirective,
    NzInputGroupComponent
  ],
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.scss'
})
export class CryptoComponent {
  @ViewChild('inputText') inputText!: ElementRef<HTMLInputElement>;

  cryptoForm!: FormGroup;
  account!: any;
  netAddressList = [
    {label: 'Bitcoin', value: 'Bitcoin'},
    {label: 'ETH', value: 'ETH'},
    {label: 'USDT', value: 'USDT'},
    {label: 'Binance Coin', value: 'Binance Coin'},
    {label: 'Solana', value: 'Solana'},
    {label: 'USD Coin', value: 'USD Coin'},
    {label: 'XRP', value: 'XRP'},
    {label: 'Dogecoin', value: 'Dogecoin'},
    {label: 'Toncoin', value: 'Toncoin'},
    {label: 'Cardano', value: 'Cardano'},
  ]

  constructor(private fb: NonNullableFormBuilder,private stateStorageService: StateStorageService,
              private matchingService: MatchingService, private notification: NzNotificationService,private accountService: AccountService,

  ) {
    this.account = this.stateStorageService.getUser();
    this.cryptoForm = this.fb.group({
      network_address: [this.account?.user?.network_address || '', [Validators.required]],
      network_wallet: [this.account?.user?.network_wallet || '', [Validators.required]],
    });
  }

  copyText() {
    const inputElement = this.inputText.nativeElement;

    const currentSelection = document.getSelection()?.rangeCount && document.getSelection()?.getRangeAt(0);

    inputElement.select();

    document.execCommand('copy');

    if (currentSelection) {
      document.getSelection()?.removeAllRanges();
      document.getSelection()?.addRange(currentSelection);
      this.createNotification('success', 'Copied to clipboard')
    }
  }

  createNotification(type: string, title: string): void {
    this.notification.create(
      type,
      title,
      '',
      {
        nzStyle: {
          textAlign: 'left'
        },
      }

    );
  }

  submitForm(): void {
    if (this.cryptoForm.valid) {
      console.log('this.cryptoForm.value', this.cryptoForm.value)
      const request = {
        ...this.cryptoForm.value
      }
      this.matchingService.updateCrypto(request).subscribe(res => {
        if (res.status === 200) {
          this.createNotification('success', res.body.message);
          this.accountService.fetch().subscribe();
        }
      }, err => {
        this.createNotification('error', err.message);
      })
    } else {
      Object.values(this.cryptoForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  protected readonly left = left;
  protected readonly countryCodeList = COUNTRY_CODE;
}
