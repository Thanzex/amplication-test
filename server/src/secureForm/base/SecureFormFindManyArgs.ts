/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SecureFormWhereInput } from "./SecureFormWhereInput";
import { Type } from "class-transformer";
import { SecureFormOrderByInput } from "./SecureFormOrderByInput";

@ArgsType()
class SecureFormFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SecureFormWhereInput,
  })
  @Field(() => SecureFormWhereInput, { nullable: true })
  @Type(() => SecureFormWhereInput)
  where?: SecureFormWhereInput;

  @ApiProperty({
    required: false,
    type: [SecureFormOrderByInput],
  })
  @Field(() => [SecureFormOrderByInput], { nullable: true })
  @Type(() => SecureFormOrderByInput)
  orderBy?: Array<SecureFormOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SecureFormFindManyArgs };