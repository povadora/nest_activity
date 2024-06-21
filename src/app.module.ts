import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [UsersModule, ProfileModule, ContactModule],
})
export class AppModule {}
