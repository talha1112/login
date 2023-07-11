import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupDto } from './signup.dto';

@Controller('signup')
export class SignupController {
    constructor(private readonly signupService:SignupService){}
    @Post()
    signup(@Body() signupDto:SignupDto){
       return this.signupService.signup(signupDto)
    }
}
