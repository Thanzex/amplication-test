/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SecureFormService } from "../secureForm.service";
import { SecureFormCreateInput } from "./SecureFormCreateInput";
import { SecureFormWhereInput } from "./SecureFormWhereInput";
import { SecureFormWhereUniqueInput } from "./SecureFormWhereUniqueInput";
import { SecureFormFindManyArgs } from "./SecureFormFindManyArgs";
import { SecureFormUpdateInput } from "./SecureFormUpdateInput";
import { SecureForm } from "./SecureForm";
import { SecureFormAnswerFindManyArgs } from "../../secureFormAnswer/base/SecureFormAnswerFindManyArgs";
import { SecureFormAnswer } from "../../secureFormAnswer/base/SecureFormAnswer";
import { SecureFormAnswerWhereUniqueInput } from "../../secureFormAnswer/base/SecureFormAnswerWhereUniqueInput";
@swagger.ApiBearerAuth()
export class SecureFormControllerBase {
  constructor(
    protected readonly service: SecureFormService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: SecureForm })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: SecureFormCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<SecureForm> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "SecureForm",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"SecureForm"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        privateKey: true,
        publicKey: true,
        structure: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [SecureForm] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(SecureFormFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<SecureForm[]> {
    const args = plainToClass(SecureFormFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "SecureForm",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        privateKey: true,
        publicKey: true,
        structure: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: SecureForm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SecureFormWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<SecureForm | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "SecureForm",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        privateKey: true,
        publicKey: true,
        structure: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: SecureForm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SecureFormWhereUniqueInput,
    @common.Body()
    data: SecureFormUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<SecureForm | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "SecureForm",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"SecureForm"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          privateKey: true,
          publicKey: true,
          structure: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: SecureForm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SecureFormWhereUniqueInput
  ): Promise<SecureForm | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          privateKey: true,
          publicKey: true,
          structure: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/answers")
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(SecureFormAnswerFindManyArgs)
  async findManyAnswers(
    @common.Req() request: Request,
    @common.Param() params: SecureFormWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<SecureFormAnswer[]> {
    const query = plainToClass(SecureFormAnswerFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "SecureFormAnswer",
    });
    const results = await this.service.findAnswers(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        payload: true,

        secureForms: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/answers")
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "update",
    possession: "any",
  })
  async createAnswers(
    @common.Param() params: SecureFormWhereUniqueInput,
    @common.Body() body: SecureFormWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      answers: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "SecureForm",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"SecureForm"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/answers")
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "update",
    possession: "any",
  })
  async updateAnswers(
    @common.Param() params: SecureFormWhereUniqueInput,
    @common.Body() body: SecureFormAnswerWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      answers: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "SecureForm",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"SecureForm"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/answers")
  @nestAccessControl.UseRoles({
    resource: "SecureForm",
    action: "update",
    possession: "any",
  })
  async deleteAnswers(
    @common.Param() params: SecureFormWhereUniqueInput,
    @common.Body() body: SecureFormWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      answers: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "SecureForm",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"SecureForm"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
