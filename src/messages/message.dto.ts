export class MessageDto {

    constructor(
        message: string,
        id_write_user: number,
        id_read_user: number,
    ){
        this.message = message,
        this.id_write_user = id_write_user,
        this.id_read_user = id_read_user
    }

    readonly message: string;
    readonly id_write_user: number;
    readonly id_read_user: number;
}