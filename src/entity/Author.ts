import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

import { Book } from './Book';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToMany(() => Book, (Book) => Book.authors)
  books!: Book[];
}
