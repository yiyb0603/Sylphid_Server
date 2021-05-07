import { IsNotEmpty, IsString } from 'class-validator';

export class ShortURLDto {
  @IsString()
  @IsNotEmpty()
  readonly url: string;
}