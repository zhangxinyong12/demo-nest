import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';

@Global()
@Module({
    // name 就是数据库的表明 不区分大小写 自动+s
    imports: [MongooseModule.forFeature([{ name: 'ZHANG', schema: CatSchema }])],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule { }
