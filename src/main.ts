import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //유효성 검사용 파이프(express의 middleware같은 존재)
  app.useGlobalPipes(
    new ValidationPipe({
      // 아무 decorator도 없는 어떠한 property의 object를 거른다.
      // -> dto에 없는 property는 Validator에 도달 X(즉, 해당 data 제외하고 리퀘스트 전송)
      whitelist: true,

      // 누군가 이상한 걸 보내면,리퀘스트 자체를 막는 기능
      // -> 에러 발생
      forbidNonWhitelisted: true,

      // controller에서 사용하는 data type으로 변환해서 넘겨줌
      // ex) Get 메소드의 Param은 url이라 default type이 string인데,
      // controller에서 받는 data의 type을 number로 지정해 놓으면, number로 변환해서 보내줌.
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
