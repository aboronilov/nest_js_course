import {Controller} from "@nestjs/common";
import {AppService} from "./app.service";
import {Get} from "@nestjs/common";

@Controller('/api')
export class AppControllers{

    constructor(private appService: AppService) {}

    @Get('/users')
    getUsers() {
        return this.appService.getUsers()
    }
}