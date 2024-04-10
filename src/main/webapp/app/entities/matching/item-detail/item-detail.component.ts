import { Component } from '@angular/core';
import ActivateRoute from '../../../account/activate/activate.route';
import { ActivatedRoute } from '@angular/router';
import { MatchingService } from '../matching.service';
import { map, pluck, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzTabComponent, NzTabSetComponent } from 'ng-zorro-antd/tabs';
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { left, right } from '@popperjs/core';

@Component({
  selector: 'jhi-item-detail',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzTabSetComponent,
    NzTabComponent,
    NzTooltipDirective,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzInputDirective,
    NzRowDirective
  ],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {
  id!: number;
  data: any;
  isChecked = false;
  deliveryForm!: FormGroup;
  constructor(private route: ActivatedRoute, private matchingService: MatchingService, private fb: NonNullableFormBuilder) {
    route.params.pipe(pluck('id'),switchMap(id => this.matchingService.getDetailItem(Number(id)))).subscribe(res => {
      this.data = res;
    });
    this.deliveryForm = this.fb.group({
      realName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      gmail: ['', [Validators.email, Validators.required]],
    });
  }

  submitForm(): void {
    if (this.deliveryForm.valid) {
      console.log('submit', this.deliveryForm.value);
    } else {
      Object.values(this.deliveryForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  protected readonly right = right;
  protected readonly left = left;
}
