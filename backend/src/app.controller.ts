import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResultDTO } from './result.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("data")
  async getData(): Promise<ResultDTO[]> {
    return await this.appService.getData();
  }
}
