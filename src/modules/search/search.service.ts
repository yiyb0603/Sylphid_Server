import { Injectable } from '@nestjs/common';
import { HttpError } from 'exception/HttpError';
import { customAxios } from 'lib/customAxios';
import { ESearch } from 'lib/enum/ESearch';

@Injectable()
export default class SearchService {
  public async getSearchResult(query: string, start: number, type: ESearch) {
    if (!query || !start || type === undefined || type === null) {
      throw new HttpError(400, '검증 오류입니다.');
    }

    const searchType: string = (type === ESearch.BLOG) ? 'blog' : 'news'; 
    const url: string = `/search/${searchType}.json?query=${encodeURI(query)}&start=${start}&display=10`;
    const { data } = await customAxios.get(url);
    
    const results = data.items;
    return results;
  }
}