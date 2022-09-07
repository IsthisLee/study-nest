/**
 * DTO(Data Transfer Object, 데이터 전송 객체)
 * - updateData와 movieData 등에 Type을 부여하기 위해 사용
 *
 * DTO 사용 이유
 * 1. 프로그래머로서 코드를 더 간결하게 만들 수 있도록 해줌
 * 2. NestJS가 들어오는 쿼리에 대해 유효성 검사할 수 있게 해줌
 * */
import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
