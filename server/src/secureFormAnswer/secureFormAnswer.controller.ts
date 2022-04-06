import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SecureFormAnswerService } from "./secureFormAnswer.service";
import { SecureFormAnswerControllerBase } from "./base/secureFormAnswer.controller.base";

@swagger.ApiTags("secureFormAnswers")
@common.Controller("secureFormAnswers")
export class SecureFormAnswerController extends SecureFormAnswerControllerBase {
  constructor(
    protected readonly service: SecureFormAnswerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
