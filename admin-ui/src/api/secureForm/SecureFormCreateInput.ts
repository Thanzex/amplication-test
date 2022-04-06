import { SecureFormAnswerCreateNestedManyWithoutSecureFormsInput } from "./SecureFormAnswerCreateNestedManyWithoutSecureFormsInput";

export type SecureFormCreateInput = {
  answers?: SecureFormAnswerCreateNestedManyWithoutSecureFormsInput;
  description?: string | null;
  name?: string | null;
  privateKey?: string | null;
  publicKey?: string | null;
  structure?: string | null;
};
