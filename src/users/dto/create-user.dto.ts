import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto{
    @ApiProperty({example: 'user@mail.ru', description: 'Электронная почта'})
    @IsString({message:'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string;

    @ApiProperty({example: 'adfdsdfgsd12345', description: 'Пароль'})
    @IsString({message:'Должно быть строкой'})
    @Length(4, 16, {message:'Не менее 4 и не более 16 символов'})
    readonly password: string;
}