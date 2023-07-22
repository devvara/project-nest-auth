import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'email', type: 'varchar', length: 100, nullable: false })
  public email: string;

  @Exclude()
  @Column({ name: 'password', type: 'varchar', length: 100, nullable: false })
  public password: string;

  @Column({ name: 'nickname', type: 'varchar', length: 50, nullable: true })
  public nickname: string | null;

  @Column({ type: 'varchar', length: 10, nullable: false })
  public mbti: string;

  @Column({ type: 'date', nullable: true })
  public birthdate: string | null;

  @CreateDateColumn({ name: 'last_login_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  lastLoginAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updatedAt: Date;
}