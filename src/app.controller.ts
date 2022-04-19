import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {InMemoryDBService} from '@nestjs-addons/in-memory-db';
import {CardEntity} from './cardEntity';

@Controller()
export class AppController {
    constructor(private dbService: InMemoryDBService<any>) {
        dbService.create({id:'0',title:'Yes',text:'Да'});
        dbService.create({id:'1',title:'No',text:'Нет'});
        dbService.create({id:'2',title:'Beverage',text:'Напиток'});
        dbService.create({id:'3',title:'Star',text:'Звезда'});
        dbService.create({id:'4',title:'Prince',text:'Принц'});
        dbService.create({id:'5',title:'behavior',text:'Поведение'});
        dbService.create({id:'6',title:'Smile',text:'Улыбка'});
        dbService.create({id:'7',title:'Apple',text:'Яблоко'});
    }

    @Get()
    getAll(): CardEntity[] {
        return this.dbService.getAll();
    }

    @Post()
    create(@Body() dto: Partial<CardEntity>): CardEntity {
        return this.dbService.create(dto);
    }

    @Post('seed')
    seed(): CardEntity[] {
        this.dbService.seed((idx: number) => ({
            id: String(idx + 1), title: `Purchase-${idx + 1}`, text:`Привет-${idx + 1}`
        }), 5);

        return this.dbService.getAll();
    }

    @Delete(':id')
    delete(@Param('id') id: string): void {
        return this.dbService.delete(id);
    }
}
