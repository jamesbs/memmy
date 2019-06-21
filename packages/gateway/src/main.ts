import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: readFileSync(join(__dirname, 'server.pem')),
      cert: readFileSync(join(__dirname, 'server.cert')),
    },
  });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
