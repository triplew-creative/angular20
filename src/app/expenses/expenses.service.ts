import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ExpensesService
{
    private expensesCache = signal<any[]>([]);
    private lastFetch = 0;

    private readonly http = inject(HttpClient);

    public getExpenses(): Observable<any[]>
    {
        // Fetch new data every 3 minutes
        const now = Date.now();
        // If cache is valid (less than 3 minutes old), return cached data
        if (this.expensesCache().length > 0 && (now - this.lastFetch < 1 * 60 * 1000))
        {
            return of(this.expensesCache());
        }
        // Otherwise, fetch new data and update cache/timestamp
        return this.http.get<any[]>('http://localhost:3001/api/expenses').pipe(
            tap(data =>
            {
                this.expensesCache.set(data ?? []);
                this.lastFetch = Date.now();
            })
        );
    }
}
