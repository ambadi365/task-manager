import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
  .setTitle('TaskManager')
  .setDescription('The Task Manager API description')
  .setVersion('1.0')
  .addTag('TaskManager')
  .addBearerAuth({
    description: 'Enter your JWT token',
    type: 'http',
    in: 'header',
    scheme: 'bearer',
    bearerFormat: 'JWT',
  })
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
app.enableCors({});
  await app.listen(3000);
}
bootstrap();
