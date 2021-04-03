import { Injectable } from '@nestjs/common';
import { HttpError } from 'exception/HttpError';
import { customAxios } from 'lib/customAxios';

@Injectable()
export default class ShortURLService {
  public async getShortURL(url: string): Promise<string> {
    if (!url.trim()) {
      throw new HttpError(400, '검증 오류입니다.');
    }

    const subURL: string = `/util/shorturl?url=${url.trim()}`;
    const { data } = await customAxios.get(subURL);
    const shortURL: string = data.result.url;
    return shortURL;
  }
}