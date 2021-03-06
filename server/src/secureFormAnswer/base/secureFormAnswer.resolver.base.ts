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
import { CreateSecureFormAnswerArgs } from "./CreateSecureFormAnswerArgs";
import { UpdateSecureFormAnswerArgs } from "./UpdateSecureFormAnswerArgs";
import { DeleteSecureFormAnswerArgs } from "./DeleteSecureFormAnswerArgs";
import { SecureFormAnswerFindManyArgs } from "./SecureFormAnswerFindManyArgs";
import { SecureFormAnswerFindUniqueArgs } from "./SecureFormAnswerFindUniqueArgs";
import { SecureFormAnswer } from "./SecureFormAnswer";
import { SecureForm } from "../../secureForm/base/SecureForm";
import { User } from "../../user/base/User";
import { SecureFormAnswerService } from "../secureFormAnswer.service";

@graphql.Resolver(() => SecureFormAnswer)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SecureFormAnswerResolverBase {
  constructor(
    protected readonly service: SecureFormAnswerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SecureFormAnswer",
    action: "read",
    possession: "any",
  })
  async _secureFormAnswersMeta(
    @graphql.Args() args: SecureFormAnswerFindManyArgs
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

  @graphql.Query(() => [SecureFormAnswer])
  @nestAccessControl.UseRoles({
    resource: "SecureFormAnswer",
    action: "read",
    possession: "any",
  })
  async secureFormAnswers(
    @graphql.Args() args: SecureFormAnswerFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<SecureFormAnswer[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "SecureFormAnswer",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => SecureFormAnswer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SecureFormAnswer",
    action: "read",
    possession: "own",
  })
  async secureFormAnswer(
    @graphql.Args() args: SecureFormAnswerFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<SecureFormAnswer | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "SecureFormAnswer",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => SecureFormAnswer)
  @nestAccessControl.UseRoles({
    resource: "SecureFormAnswer",
    action: "create",
    possession: "any",
  })
  async createSecureFormAnswer(
    @graphql.Args() args: CreateSecureFormAnswerArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<SecureFormAnswer> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "SecureFormAnswer",
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
        `providing the properties: ${properties} on ${"SecureFormAnswer"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        secureForms: args.data.secureForms
          ? {
              connect: args.data.secureForms,
            }
          : undefined,

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @graphql.Mutation(() => SecureFormAnswer)
  @nestAccessControl.UseRoles({
    resource: "SecureFormAnswer",
    action: "update",
    possession: "any",
  })
  async updateSecureFormAnswer(
    @graphql.Args() args: UpdateSecureFormAnswerArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<SecureFormAnswer | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "SecureFormAnswer",
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
        `providing the properties: ${properties} on ${"SecureFormAnswer"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          secureForms: args.data.secureForms
            ? {
                connect: args.data.secureForms,
              }
            : undefined,

          user: {
            connect: args.data.user,
          },
        },
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

  @graphql.Mutation(() => SecureFormAnswer)
  @nestAccessControl.UseRoles({
    resource: "SecureFormAnswer",
    action: "delete",
    possession: "any",
  })
  async deleteSecureFormAnswer(
    @graphql.Args() args: DeleteSecureFormAnswerArgs
  ): Promise<SecureFormAnswer | null> {
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

  @graphql.ResolveField(() => SecureForm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SecureFormAnswer",
    action: "read",
    possession: "any",
  })
  async secureForms(
    @graphql.Parent() parent: SecureFormAnswer,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<SecureForm | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "SecureForm",
    });
    const result = await this.service.getSecureForms(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SecureFormAnswer",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: SecureFormAnswer,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
