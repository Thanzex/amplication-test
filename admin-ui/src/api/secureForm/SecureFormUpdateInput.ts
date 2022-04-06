import { SecureFormAnswerUpdateManyWithoutSecureFormsInput } from "./SecureFormAnswerUpdateManyWithoutSecureFormsInput";

export type SecureFormUpdateInput = {
  answers?: SecureFormAnswerUpdateManyWithoutSecureFormsInput;
  description?: string | null;
  name?: string | null;
  privateKey?: string | null;
  publicKey?: string | null;
  structure?: string | null;
};
