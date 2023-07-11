import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SignupModel } from './signup.model';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt'

interface User{
    name:string,
    email:string,
    pasword:string
}

@Injectable()
export class SignupService {
    constructor(
        @InjectModel("Signup") private signupModel :Model<SignupModel>
    ){}

   async signup(user:User){
        const newUser = new this.signupModel({
            name:user.name,
            email:user.email,
            pasword:await bcrypt.hash(user.pasword,10)
        })
        try{
            await newUser.save()
        }
        catch(error){
            if(error.message.includes('username')){
                throw new HttpException('User name already Taken',404)
            }
            if(error.message.includes('email')){
                throw new HttpException('email already Taken',404)
            }
        }
    }
}
