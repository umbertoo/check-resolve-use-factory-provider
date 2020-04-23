import { Module } from "@nestjs/common";
import { RequestScopedService } from "./request-scoped.service";
import { FactoryProvidedService } from "./factory-provided.service";

@Module({
  imports: [],
  providers: [
    RequestScopedService,
    {
      provide: FactoryProvidedService,
      useFactory: (service) => new FactoryProvidedService(service),
      inject: [RequestScopedService],
    },
  ],
})
export class AppModule {}
