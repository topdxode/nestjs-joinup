// import {
//   Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany,
// } from 'typeorm';
// import { Event } from '../events/event.entity';
// import { Registration } from '../registrations/registration.entity';

// @Entity('users')
// export class User {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column({ unique: true })
//   email: string;

//   @Column()
//   password: string;

//   @Column({ nullable: true })
//   full_name: string;

//   @Column({ default: 'USER' })
//   role: 'USER' | 'ADMIN';

//   @CreateDateColumn()
//   created_at: Date;

//   @UpdateDateColumn()
//   updated_at: Date;

//   @OneToMany(() => Event, event => event.created_by)
//   events: Event[];

//   @OneToMany(() => Registration, registration => registration.user)
//   registrations: Registration[];
// }