import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], //Express의 Router같은 존재. URl을 가져오고 함수를 실행함
  providers: [], //비지니스 로직
})
export class AppModule {}
