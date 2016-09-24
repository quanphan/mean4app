/**
 * Created by phanquan on 3/30/16.
 */

import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('token-access', localStorage.getItem('jwt'));
