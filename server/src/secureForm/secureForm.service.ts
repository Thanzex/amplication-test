import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SecureFormServiceBase } from "./base/secureForm.service.base";

@Injectable()
export class SecureFormService extends SecureFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
