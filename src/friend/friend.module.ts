import { Module } from '@nestjs/common';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [FriendController],
  providers: [FriendService],
})
export class FriendModule {}
