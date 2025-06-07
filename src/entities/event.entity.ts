// import {
//   Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
//   ManyToOne, OneToMany, JoinColumn,
// } from 'typeorm';
// import { User } from '../users/user.entity';
// import { Registration } from '../registrations/registration.entity';

// @Entity('events')
// export class Event {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   name: string;

//   @Column({ type: 'text', nullable: true })
//   description: string;

//   @Column({ type: 'date', nullable: true })
//   date: string;

//   @Column({ nullable: true })
//   location: string;

//   @Column({ type: 'int', nullable: true })
//   capacity: number;

//   @ManyToOne(() => User, user => user.events)
//   @JoinColumn({ name: 'created_by' })
//   created_by: User;

//   @CreateDateColumn()
//   created_at: Date;

//   @UpdateDateColumn()
//   updated_at: Date;

//   @OneToMany(() => Registration, registration => registration.event)
//   registrations: Registration[];
// }