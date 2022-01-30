import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class users{
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column()
    username: string;

    @Column({unique:true})
    email: string;

    @Column()
    password:string;

}

export default users;