import { Injectable } from '@nestjs/common';
import { customAxios } from 'lib/customAxios';
import { TranslateDto } from './dto/translate.dto';

@Injectable()
export default class TranslateService {
  public async getTranslatedString(translateDto: TranslateDto): Promise<string> {
    const url: string = '/papago/n2mt';
    const { data } = await customAxios.post(url, translateDto);
    
    const { translatedText } = data.message.result;
    return translatedText;
  }
}