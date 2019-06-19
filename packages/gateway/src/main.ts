import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getCredentials } from './get-credentials';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: getCredentials(),
  });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
