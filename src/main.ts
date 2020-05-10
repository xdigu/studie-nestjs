import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors())
  app.use(helmet())
  app.use(morgan('dev'))

  await app.listen(3000);
}

bootstrap();
