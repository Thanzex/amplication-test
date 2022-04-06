import { Module } from "@nestjs/common";
import { SecureFormAnswerModuleBase } from "./base/secureFormAnswer.module.base";
import { SecureFormAnswerService } from "./secureFormAnswer.service";
import { SecureFormAnswerController } from "./secureFormAnswer.controller";
import { SecureFormAnswerResolver } from "./secureFormAnswer.resolver";

@Module({
  imports: [SecureFormAnswerModuleBase],
  controllers: [SecureFormAnswerController],
  providers: [SecureFormAnswerService, SecureFormAnswerResolver],
  exports: [SecureFormAnswerService],
})
export class SecureFormAnswerModule {}
