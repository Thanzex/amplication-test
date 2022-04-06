import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SecureFormResolverBase } from "./base/secureForm.resolver.base";
import { SecureForm } from "./base/SecureForm";
import { SecureFormService } from "./secureForm.service";

@graphql.Resolver(() => SecureForm)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SecureFormResolver extends SecureFormResolverBase {
  constructor(
    protected readonly service: SecureFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
