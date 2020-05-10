import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express'

@Injectable()
export class LogsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('new request')
    next();
  }
}
