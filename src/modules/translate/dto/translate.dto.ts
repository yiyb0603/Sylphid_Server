import { IsEnum, IsString, MaxLength } from 'class-validator';
import { ELanguageCode } from 'lib/enum/ELanguageCode';

export class TranslateDto {
  @IsString()
  @MaxLength(50)
  readonly text: string;
  
  @IsEnum(ELanguageCode)
  readonly source: ELanguageCode; // 원본 언어 코드

  @IsEnum(ELanguageCode)
  readonly target: ELanguageCode; // 번역할 언어 코드
}