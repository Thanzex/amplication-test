import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SecureFormAnswerResolverBase } from "./base/secureFormAnswer.resolver.base";
import { SecureFormAnswer } from "./base/SecureFormAnswer";
import { SecureFormAnswerService } from "./secureFormAnswer.service";

@graphql.Resolver(() => SecureFormAnswer)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SecureFormAnswerResolver extends SecureFormAnswerResolverBase {
  constructor(
    protected readonly service: SecureFormAnswerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
