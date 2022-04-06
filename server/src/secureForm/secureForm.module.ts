import { Module } from "@nestjs/common";
import { SecureFormModuleBase } from "./base/secureForm.module.base";
import { SecureFormService } from "./secureForm.service";
import { SecureFormController } from "./secureForm.controller";
import { SecureFormResolver } from "./secureForm.resolver";

@Module({
  imports: [SecureFormModuleBase],
  controllers: [SecureFormController],
  providers: [SecureFormService, SecureFormResolver],
  exports: [SecureFormService],
})
export class SecureFormModule {}
