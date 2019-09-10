import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next) {
    // tslint:disable-next-line: no-console
    console.log('Request...');
    next();
  }
}

// export function LoggerMiddleware(req, res, next) {
//   // tslint:disable-next-line: no-console
//   console.log(`Request...`);
//   next();
// }