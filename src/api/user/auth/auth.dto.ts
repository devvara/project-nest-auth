import { Trim } from 'class-sanitizer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  public password: string;

  @Trim()
  @IsNotEmpty()
  @IsString()
  public nickname: string;

  @IsOptional()
  @IsString()
  public mbti: string;

  @IsOptional()
  @IsString()
  public birthdate: string;
}

export class LoginDto {
  @Trim()
  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}
