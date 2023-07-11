import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://talha1:123456qwerty@login.x34ccjz.mongodb.net/'),
    SignupModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
