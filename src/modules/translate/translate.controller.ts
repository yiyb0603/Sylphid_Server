import { Body, Controller, Post } from '@nestjs/common';
import { IResponse } from 'types/Response';
import { TranslateDto } from './dto/translate.dto';
import TranslateService from './translate.service';

@Controller('/translate')
export default class TranslateController {
  constructor(
    private readonly translateService: TranslateService,
  ) {}

  @Post('/')
  public async getTranslatedString(
    @Body() translateDto: TranslateDto,
  ): Promise<IResponse> {
    const translatedText: string = await this.translateService.getTranslatedString(translateDto);

    return {
      status: 200,
      message: '문장 번역을 성공하였습니다.',
      data: {
        translatedText,
      },
    };
  }
}