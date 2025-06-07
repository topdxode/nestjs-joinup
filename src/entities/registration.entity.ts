// import {
//   Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn,
// } from 'typeorm';
// import { User } from '../users/user.entity';
// import { Event } from '../events/event.entity';

// @Entity('registrations')
// export class Registration {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @ManyToOne(() => User, user => user.registrations)
//   @JoinColumn({ name: 'user_id' })
//   user: User;

//   @ManyToOne(() => Event, event => event.registrations)
//   @JoinColumn({ name: 'event_id' })
//   event: Event;

//   @Column({ nullable: true })
//   bib_number: string;

//   @Column({ default: 'PENDING' })
//   status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';

//   @CreateDateColumn()
//   registered_at: Date;
// }