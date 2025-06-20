import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class GenerateDto {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(2)
  @Type(() => Number)
  @IsInt({ each: true })
  items: number[];

  @IsNumber()
  @IsPositive()
  length: number;
}
