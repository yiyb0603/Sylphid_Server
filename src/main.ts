import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { getProcessEnv } from 'lib/getProcessEnv';
import { AppModule } from './app.module';

const bootstrap = async (): Promise<void> => {
  const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: true,
      preflightContinue: true,
    },
  });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  app.enableCors({
    origin: '*',
  });
  
  app.setGlobalPrefix('/api');

  const PORT: number = Number(getProcessEnv('PORT')) || 8080;
  await app.listen(PORT)
  .then(() => console.log(`this server running on ${PORT}`))
  .catch((error) => console.log(error));
}

bootstrap();
