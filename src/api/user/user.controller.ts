import {
  ClassSerializerInterceptor,
  Controller,
  Req,
  UseGuards,
  UseInterceptors,
  Put,
  Body,
  Inject,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from './auth/auth.guard';
import { UpdateNicknameDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Put('nickname')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  private updateNickname(
    @Body() body: UpdateNicknameDto,
    @Req() req: Request,
  ): Promise<User> {
    return this.service.updateNickname(body, req);
  }
}
