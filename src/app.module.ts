import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import SearchModule from 'modules/search/search.module';
import ShortURLModule from 'modules/shortURL/shortUrl.module';
import TranslateModule from 'modules/translate/translate.module';
import CatchException from './exception/CatchException';

@Module({
  imports: [
    TranslateModule,
    ShortURLModule,
    SearchModule,
  ],
  controllers: [],
  providers: [{
    provide: APP_FILTER,
    useClass: CatchException,
  }],
})
export class AppModule {}
