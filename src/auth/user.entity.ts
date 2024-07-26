import { Task } from "src/tasks/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Repository } from "typeorm";

@Entity()
export class User extends Repository<User> {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @OneToMany(_type=> Task, (task) => task.user, {eager: true})
    tasks: Task[];

}
