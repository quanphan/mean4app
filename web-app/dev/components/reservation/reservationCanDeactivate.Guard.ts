/**
 * Created by phanquan on 7/16/16.
 */

import { CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs/Observable';

export interface CanComponentDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}
export class ReservationCanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
