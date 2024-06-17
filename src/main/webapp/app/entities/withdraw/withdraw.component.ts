import { Component } from '@angular/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Router, RouterLink } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzInputDirective, NzInputGroupComponent } from 'ng-zorro-antd/input';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { MatchingService } from '../matching/matching.service';
import { AccountService } from '../../core/auth/account.service';
import { StateStorageService } from '../../core/auth/state-storage.service';

@Component({
  selector: 'jhi-withdraw',
  standalone: true,
  imports: [
    NzIconDirective,
    RouterLink,
    NzButtonComponent,
    NzColDirective,
    NzFormControlComponent,
    NzFormDirective,
    NzFormItemComponent,
    NzInputDirective,
    NzInputGroupComponent,
    NzRowDirective,
    ReactiveFormsModule,
    FormsModule,
    NzFormLabelComponent
  ],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent {
  withdrawForm!: FormGroup;
  account: any;

  constructor(private accountService: AccountService, private matchingService: MatchingService, private fb: NonNullableFormBuilder, private notification: NzNotificationService, private location: Location, private router: Router, private stateStorageService: StateStorageService
  ) {
    this.withdrawForm = this.fb.group({
      amount: [null, [Validators.required]]
    });
    this.account = stateStorageService.getUser();

  }

  submitForm(): void {
    if (this.withdrawForm.valid) {

      const amount = this.withdrawForm.get('amount')?.value;

      if (amount < 50000 || amount > 10000000000) {
        this.createNotification('warning', 'Số tiền tối thiểu cho một lần rút tiền là 50000₫,tối đa 10000000000₫');

      } else {
        const request = {
          type: 'bank',
          amount
        };
        this.matchingService.withdraw(request).subscribe(res => {
          if (res.status === 200) {
            this.createNotification('success', res.body.message);
            this.accountService.fetch().pipe(tap(_ => this.router.navigate(['/']).then())).subscribe();
          }
        }, err => {
          if (err.status === 400) {
            this.createNotification('warning', err.error.message);
          }
        });

      }
      /* this.matchingService.order(request).subscribe(res => {
         if (res.status === 201) {
           this.createNotification('success', 'Order placed successfully. The order is being processed');
           this.accountService.fetch().pipe(tap(_ => this.router.navigate(['/matching']).then())).subscribe();
         }
       })*/
    } else {
      Object.values(this.withdrawForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
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
        }
      }
    );
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

}
