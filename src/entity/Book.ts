import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm';

import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @ManyToMany(() => Author, (author) => author.books, {
    cascade: true
  })
  @JoinTable()
  authors!: Author[];
}
