import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

//CreateMovieDto는 PartialType의 베이스 Type
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;
//
//   @IsNumber()
//   readonly year?: number;
//
//   @IsString({ each: true })
//   readonly genres?: string[];
// }
