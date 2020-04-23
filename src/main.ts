import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { FactoryProvidedService } from "./factory-provided.service";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const service = await app.resolve(FactoryProvidedService);
}
bootstrap();
