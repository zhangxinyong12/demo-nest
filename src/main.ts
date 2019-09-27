import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ValidationPipe } from './pipe/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prot = 3006;
  // 全局中间件 函数式声明
  // app.use(LoggerMiddleware);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(prot, () => {
    // tslint:disable-next-line: no-console
    console.log(`${prot} 端口启动成功`);
  });
}
bootstrap();
