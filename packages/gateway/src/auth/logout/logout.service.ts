import { Injectable } from '@nestjs/common';
import { OperationSuccess, Status, Token, operationSucceeded } from '@memmy/model';

@Injectable()
export class LogoutService {
  logout(credentials: Token): Status<OperationSuccess> {
    return { 
      status: operationSucceeded,
    };
  }
}
