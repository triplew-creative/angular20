import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PaymentsService
{
    private paymentsCache = signal<any[]>([]);
    private lastFetch = 0;

    private readonly http = inject(HttpClient);

    public getPayments(): Observable<any[]>
    {
        // Fetch new data every 3 minutes
        const now = Date.now();
        // If cache is valid (less than 3 minutes old), return cached data
        if (this.paymentsCache().length > 0 && (now - this.lastFetch < 3 * 60 * 1000))
        {
            return of(this.paymentsCache());
        }
        // Otherwise, fetch new data and update cache/timestamp
        return this.http.get<any[]>('http://localhost:3001/api/payments').pipe(
            tap(data =>
            {
                this.paymentsCache.set(data ?? []);
                this.lastFetch = Date.now();
            })
        );
    }
}
