import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SecureFormAnswerServiceBase } from "./base/secureFormAnswer.service.base";

@Injectable()
export class SecureFormAnswerService extends SecureFormAnswerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
