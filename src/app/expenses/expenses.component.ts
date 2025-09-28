import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ExpensesService } from './expenses.service';

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class ExpensesComponent
{
    private readonly expensesService = inject(ExpensesService);

    protected expenses = toSignal(this.expensesService.getExpenses(), { initialValue: [] });
}
