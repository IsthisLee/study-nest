import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  //Express의 Router같은 존재. URl을 가져오고 함수를 실행함
  //url 매핑, 리퀘스트 받고, Query, Params, Body 등을 넘김
  controllers: [MoviesController],
  providers: [MoviesService], //비지니스 로직
})
export class AppModule {}
