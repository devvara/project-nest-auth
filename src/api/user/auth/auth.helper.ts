import { Injectable, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/api/user/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthHelper {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  private readonly jwt: JwtService;

  constructor(jwt: JwtService) {
    this.jwt = jwt;
  }

  public async decode(token: string): Promise<unknown> {
    return this.jwt.decode(token, null);
  }

  public async validateUser(decode: any): Promise<User> {
    return this.userRepository.findOne(decode.id)
  }

  public generateToken(user: User): string {
    return this.jwt.sign({ id: user.id, email: user.email, nickname: user.nickname, birthdate: user.birthdate, mbti: user.mbti });
  }

  public isPasswordValid(password: string, userPassword: string): boolean {
    return bcrypt.compareSync(password, userPassword);
  }

  public encodePassword(password: string): string {
    const salt: string = bcrypt.getSaltSync(10);

    return bcrypt.hashSync(password, salt);
  }

  private async validate(token: string): Promise<boolean | never> {
    const decode: unknown = this.jwt.verify(token)
  
    if (!decode) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    const user: User = await this.validateUser(decode);

    if (!user) {
      throw new UnauthorizedException();
    }

    return true;
  }
}