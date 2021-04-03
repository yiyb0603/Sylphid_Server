import { Controller, Get, Query } from '@nestjs/common';
import { IResponse } from 'types/Response';
import ShortURLService from './shortUrl.service';

@Controller('/short-url')
export default class ShortURLController {
  constructor(
    private readonly shortURLService: ShortURLService,
  ) {}

  @Get('/')
  public async getShortURL(
    @Query('url') url: string,
  ): Promise<IResponse> {
    const shortURL: string = await this.shortURLService.getShortURL(url);

    return {
      status: 200,
      message: '단축 URL을 조회하였습니다.',
      data: {
        shortURL,
      },
    };
  }
}