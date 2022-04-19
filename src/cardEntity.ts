import {InMemoryDBEntity} from '@nestjs-addons/in-memory-db';

export class CardEntity implements InMemoryDBEntity {
    id: string;
    title: string;
    text: string;
}
