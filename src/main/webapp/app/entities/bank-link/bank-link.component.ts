import { Component } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Location, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { StateStorageService } from '../../core/auth/state-storage.service';
import { MatchingService } from '../matching/matching.service';
import { AccountService } from '../../core/auth/account.service';

@Component({
  selector: 'jhi-bank-link',
  standalone: true,
  imports: [
    FormsModule,
    NzButtonComponent,
    NzColDirective,
    NzFormControlComponent,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzIconDirective,
    NzInputDirective,
    NzRowDirective,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './bank-link.component.html',
  styleUrl: './bank-link.component.scss'
})
export class BankLinkComponent {
  bankLinkForm!: FormGroup;
  account!: any;
  isShowUpdate = false;
  constructor(private accountService: AccountService,private matchingService: MatchingService, private fb: NonNullableFormBuilder,private stateStorageService: StateStorageService, private notification: NzNotificationService, private location: Location, private router: Router
  ) {
    this.account = this.stateStorageService.getUser();

    console.log('this.account', this.account);
    this.bankLinkForm = this.fb.group({
      account_name: [this.account?.user?.account_name || '', [Validators.required]],
      account_number: [this.account?.user?.account_number || '', [Validators.required]],
      bank: [this.account?.user?.bank || '', [Validators.required]],
    });

    this.isShowUpdate = !(this.account?.user?.account_name && this.account?.user?.account_number && this.account?.user?.bank)
  }
  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  onlyAllowNumbers(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;

    // Allow control keys (e.g., Backspace, Delete, Arrow keys)
    if (
      charCode === 8 || // Backspace
      charCode === 46 || // Delete
      (charCode >= 37 && charCode <= 40) // Arrow keys
    ) {
      return;
    }

    // Allow only numbers
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
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
    if (this.bankLinkForm.valid) {
      const request = {
        ...this.bankLinkForm.value
      }
      this.matchingService.updateBank(request).subscribe(res => {
        if (res.status === 200) {
          this.createNotification('success', res.body.message);
          this.accountService.fetch().subscribe(res => {
            this.isShowUpdate = !(this.account?.user?.account_name && this.account?.user?.account_number && this.account?.user?.bank)
          });
        }
      }, err => {
        this.createNotification('error', err.message);
      })
    } else {
      Object.values(this.bankLinkForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
