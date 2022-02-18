import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example: 'user@mail.ru', description: 'Электронная почта'})
    readonly email: string;

    @ApiProperty({example: 'adfdsdfgsd12345', description: 'Пароль'})
    readonly password: string;
}