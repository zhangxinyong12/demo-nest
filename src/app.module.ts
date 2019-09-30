import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';

import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://zhangNest:zhang123@47.105.105.165:27017/nest?authSource=admin',
      // MongooseModule.forRoot('mongodb://47.105.105.165:27017/nest',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes('cats');
      // forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
      .forRoutes(CatsController);
    // .forRoutes({ path: 'cats', method: RequestMethod.POST });
  }
}
