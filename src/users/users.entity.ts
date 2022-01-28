import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class users{
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password:string;

}

export default users;