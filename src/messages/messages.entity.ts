import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class messages{
    @PrimaryGeneratedColumn()
    id_message: number;

    @Column()
    message: string;

    @Column()
    id_write_user: number;

    @Column()
    id_read_user:number;

    @CreateDateColumn()
    notification: Date;
}

export default messages;