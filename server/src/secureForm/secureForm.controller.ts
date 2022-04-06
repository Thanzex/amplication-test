import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SecureFormService } from "./secureForm.service";
import { SecureFormControllerBase } from "./base/secureForm.controller.base";

@swagger.ApiTags("secureForms")
@common.Controller("secureForms")
export class SecureFormController extends SecureFormControllerBase {
  constructor(
    protected readonly service: SecureFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
