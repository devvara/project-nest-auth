import { IsOptional, IsString } from "class-validator";

export class UpdateNicknameDto {
  @IsString()
  @IsOptional()
  public readonly nickname?: string;
}