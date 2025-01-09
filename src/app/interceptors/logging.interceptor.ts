import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request recieved: ', {
    url: req.url,
    method: req.method,
    body: req.body,
  });
  return next(req);
};
