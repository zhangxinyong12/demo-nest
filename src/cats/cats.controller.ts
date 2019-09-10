import { Controller, Get, Query, Post, Body, Put, Param, Delete, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from './../exception/forbidden-exception';
import { HttpExceptionFilter } from './../filter/http-exception.filter';

// 全局 整个cats
@UseFilters(new HttpExceptionFilter())
@Controller('cats')
export class CatsController {
    constructor(
        private readonly catsService: CatsService,
    ) { }

    @Post()
    create(@Body() createCatDto: any, @Query() query: any) {
        // this.catsService.create(createCatDto);
        // return { ...createCatDto };
        throw new ForbiddenException();

    }

    @Get()
    // 单个
    // @UseFilters(new HttpExceptionFilter())
    async findAll(): Promise<Cat[]> {
        throw new ForbiddenException();
        // return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
