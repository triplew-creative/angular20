import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { PaymentsService } from './payments.service';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class PaymentsComponent
{
    private readonly paymentsService = inject(PaymentsService);
    protected payments = toSignal(this.paymentsService.getPayments(), { initialValue: [] });
}
