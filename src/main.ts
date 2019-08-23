import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prot = 3006;
  await app.listen(prot, () => {
    // tslint:disable-next-line: no-console
    console.log(`${prot} 端口启动成功`);
  });
}
bootstrap();
