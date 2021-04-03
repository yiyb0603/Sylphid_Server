import { Module } from '@nestjs/common';
import TranslateController from './translate.controller';
import TranslateService from './translate.service';

@Module({
  imports: [],
  controllers: [TranslateController],
  providers: [TranslateService],
})
export default class TranslateModule {
  
}