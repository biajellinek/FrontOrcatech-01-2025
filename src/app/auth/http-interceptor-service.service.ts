import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const meuhttpInterceptor: HttpInterceptorFn = (request, next) => {

  let router = inject(Router);

  let token = localStorage.getItem('token');
  if (token && !router.url.includes('/auth/login')) {
    request = request.clone({
      setHeaders: { Authorization: 'Bearer ' + token },
    });
  }else if(token && router.url.includes('/auth/login')) {
    router.navigate(['/']);
  }

  return next(request).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
	  
	  
        if (err.status === 401) {
          alert('401 - tratar aqui');
          router.navigate(['/login']);
        } else if (err.status === 403) {
          alert('403 - tratar aqui');
		  router.navigate(['/auth/login']);
        } else {
          console.error('HTTP error:', err);
        }
		
		
      } else {
        console.error('An error occurred:', err);
      }

      return throwError(() => err);
    })
  );
};  