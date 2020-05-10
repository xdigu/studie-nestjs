import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatModule, CatController } from './cat'
import { LogsMiddleware } from './common/middleware'
import { RolesGuard } from './common/validation/roles.guard'
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [CatModule],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard
  }]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogsMiddleware)
      .forRoutes(CatController)
  }
}
