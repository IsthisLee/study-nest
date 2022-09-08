import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

/**Nest.js에는 Dependency Injection이란 개념이 존재

1. module의 providers에 Service를 설정한다.
2. NestJS가 Service를 import한다.
3. Controller에 Service를 Inject(주입)한다.
4. type을 지정하는 것 만으로 Controller에서 Service 사용 가능.*/

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
