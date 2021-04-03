import { Controller, Get, Query } from '@nestjs/common';
import { ESearch } from 'lib/enum/ESearch';
import { IResponse } from 'types/Response';
import SearchService from './search.service';

@Controller('/search')
export default class SearchController {
  constructor(
    private readonly searchService: SearchService,
  ) {}

  @Get('/')
  public async getSearchResult(
    @Query('query') query: string,
    @Query('start') start: number,
    @Query('type') type: ESearch,
  ): Promise<IResponse> {
    const blogs = await this.searchService.getSearchResult(query, start, type);

    return {
      status: 200,
      message: '블로그 글 목록을 검색하였습니다.',
      data: {
        blogs,
      },
    };
  }
}