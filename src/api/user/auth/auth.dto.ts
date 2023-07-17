import { Trim } from 'class-sanitizer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  public password: string;

  @Trim()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public mbti: string;  

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