import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global()
@Module({
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule { }
