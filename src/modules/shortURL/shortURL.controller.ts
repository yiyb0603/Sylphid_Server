import { Body, Controller, Post } from '@nestjs/common';
import { IResponse } from 'types/Response';
import { ShortURLDto } from './dto/shortURL.dto';
import ShortURLService from './shortUrl.service';

@Controller('/short-url')
export default class ShortURLController {
  constructor(
    private readonly shortURLService: ShortURLService,
  ) {}

  @Post('/')
  public async getShortURL(
    @Body() shortURLDto: ShortURLDto,
  ): Promise<IResponse> {
    const shortURL: string = await this.shortURLService.getShortURL(shortURLDto);

    return {
      status: 200,
      message: '단축 URL을 조회하였습니다.',
      data: {
        shortURL,
      },
    };
  }
}