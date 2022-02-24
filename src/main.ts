import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationException} from "./exceptions/validation.exception";
import {ValidationPipe} from "./pipes/validation-pipe";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Курс по продвинутому Back-end на nestjs')
        .setDescription('Документация по REST API')
        .setVersion('1.0.0')
        .addTag('Ulbi TV')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server is running on ${PORT} port`))
}

start()