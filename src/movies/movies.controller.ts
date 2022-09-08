import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  /**
   * NestJS는 Fastify와 Express 위에서 동작이 가능하다.
   *
   * 다음과 같이 데코레이터를 사용하여 Express 객체 사용 가능.
   *
   * 그러나, NestJS가 Fastify 위에서는 Express보다 2배 빠르다고 한다.
   *
   * 다음과 같이 Express 객체를 써버리면 Fastify로 변경할 때 문제가 발생한다.
   *
   * 따라서, 가능한 NestJS에서 처리하는 방법을 사용하여 처리하는 것이 좋다.
   * */
  @Get()
  getAll(@Req() req, @Res() res): Movie[] {
    return this.movieService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.movieService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.movieService.update(movieId, updateData);
  }
}
