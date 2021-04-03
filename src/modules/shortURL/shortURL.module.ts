import { Module } from '@nestjs/common';
import ShortURLController from './shortUrl.controller';
import ShortURLService from './shortUrl.service';

@Module({
  imports: [],
  controllers: [ShortURLController],
  providers: [ShortURLService],
})
export default class ShortURLModule {

}