import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Signup{

    @Prop({unique:true})
    name:string

    @Prop({unique:true})
    email:string

    @Prop()
    pasword:string
}

export type SignupModel= Signup &Document
export const SignupSchema =SchemaFactory.createForClass(Signup)
