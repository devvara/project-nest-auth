import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', nullable: false })
  public email: string;

  @Exclude()
  @Column({ type: 'varchar', nullable: false })
  public password: string;

  @Column({ type: 'varchar', nullable: false })
  public mbti: string;;

  @Column({ type: 'varchar', nullable: true })
  public name: string | null;

  @Column({ type: 'varchar', nullable: true })
  public birthdate: string | null;

  @Column({ type: 'varchar', nullable: true, default: null })
  public lastLoginAt: Date | null;
}