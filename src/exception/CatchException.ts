import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Response } from 'express';

export default class CatchException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response: Response = ctx.getResponse();

    let error = null;
    console.log(exception);
    
    if (exception instanceof HttpException) {
      error = {
        status: exception.getStatus(),
        message: exception.message,
      };
    } else {
      error = {
        status: 500,
        message: '서버 오류입니다.',
      };
    }

    const { status, message } = error;
    return response.status(status).json({
      status,
      message,
    });
  }
}