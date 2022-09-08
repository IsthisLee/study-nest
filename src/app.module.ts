import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  //Express의 Router같은 존재. URl을 가져오고 함수를 실행함
  //url 매핑, 리퀘스트 받고, Query, Params, Body 등을 넘김
  controllers: [AppController],
  providers: [], //비지니스 로직
})
export class AppModule {}
