import { RequestScopedService } from "./request-scoped.service";

export class FactoryProvidedService {
  constructor(service: RequestScopedService) {}
}
