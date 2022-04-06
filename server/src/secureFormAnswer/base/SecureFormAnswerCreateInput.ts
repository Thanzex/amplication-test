/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, ValidateNested, IsOptional } from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SecureFormWhereUniqueInput } from "../../secureForm/base/SecureFormWhereUniqueInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class SecureFormAnswerCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSONObject)
  payload!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => SecureFormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SecureFormWhereUniqueInput)
  @IsOptional()
  @Field(() => SecureFormWhereUniqueInput, {
    nullable: true,
  })
  secureForms?: SecureFormWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}
export { SecureFormAnswerCreateInput };
