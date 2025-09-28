
import { Routes } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'payments', component: PaymentsComponent },
    { path: 'expenses', component: ExpensesComponent },
];
