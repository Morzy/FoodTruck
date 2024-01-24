import { AppService } from './app.service';
import { ResultDTO } from './result.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getData(): Promise<ResultDTO[]>;
}
