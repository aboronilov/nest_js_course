import {Module} from "@nestjs/common";
import {AppControllers} from "./app.controllers";
import {AppService} from "./app.service";

@Module({
    controllers: [AppControllers],
    providers: [AppService]
})
export class AppModule {

}