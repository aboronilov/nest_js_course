import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "./user-roles.model";

// Поля необходимые для создания экземпляра класса
interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true})
    id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Электронная почта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'adfdsdfgsd12345', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Статус активности'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'за хулиганство', description: 'Причина бана'})
    @Column({type: DataType.STRING, defaultValue: ""})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}