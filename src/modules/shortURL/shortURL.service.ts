import { Injectable } from '@nestjs/common';
import { HttpError } from 'exception/HttpError';
import { customAxios } from 'lib/customAxios';
import { ShortURLDto } from './dto/shortURL.dto';

@Injectable()
export default class ShortURLService {
  public async getShortURL(shortURLDto: ShortURLDto): Promise<string> {
    const { url } = shortURLDto;

    const subURL: string = `/util/shorturl?url=${url.trim()}`;
    const { data } = await customAxios.get(subURL);
    const shortURL: string = data.result.url;
    return shortURL;
  }
}