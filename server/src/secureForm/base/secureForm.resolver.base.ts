/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateSecureFormArgs } from "./CreateSecureFormArgs";
import { UpdateSecureFormArgs } from "./UpdateSecureFormArgs";
import { DeleteSecureFormArgs } from "./DeleteSecureFormArgs";
import { SecureFormFindManyArgs } from "./SecureFormFindManyArgs";
import { SecureFormFindUniqueArgs } from "./SecureFormFindUniqueArgs";
import { SecureForm } from "./SecureForm";
import { SecureFormAnswerFindManyArgs } from "../../secureFormAnswer/base/SecureFormAnswerFindManyArgs";
import { SecureFormAnswer } from "../../secureFormAnswer/base/SecureFormAnswer";
import { SecureFormService } from "../secureForm.service";

@graphql.Resolver(() => SecureForm)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SecureFormResolverBase {
  constructor(
    protected readonly service: SecureFormService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "read",
    possession: "any",
  })
  async _secureFormsMeta(
    @graphql.Args() args: SecureFormFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [SecureForm])
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "read",
    possession: "any",
  })
  async secureForms(
    @graphql.Args() args: SecureFormFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<SecureForm[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "SecureForm",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => SecureForm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "read",
    possession: "own",
  })
  async secureForm(
    @graphql.Args() args: SecureFormFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<SecureForm | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "SecureForm",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => SecureForm)
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "create",
    possession: "any",
  })
  async createSecureForm(
    @graphql.Args() args: CreateSecureFormArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<SecureForm> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "SecureForm",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"SecureForm"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SecureForm)
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "update",
    possession: "any",
  })
  async updateSecureForm(
    @graphql.Args() args: UpdateSecureFormArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<SecureForm | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "SecureForm",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"SecureForm"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SecureForm)
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "delete",
    possession: "any",
  })
  async deleteSecureForm(
    @graphql.Args() args: DeleteSecureFormArgs
  ): Promise<SecureForm | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [SecureFormAnswer])
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "read",
    possession: "any",
  })
  async answers(
    @graphql.Parent() parent: SecureForm,
    @graphql.Args() args: SecureFormAnswerFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<SecureFormAnswer[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "SecureFormAnswer",
    });
    const results = await this.service.findAnswers(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
