import { InputJsonValue } from "../../types";
import { SecureFormWhereUniqueInput } from "../secureForm/SecureFormWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SecureFormAnswerUpdateInput = {
  payload?: InputJsonValue;
  secureForms?: SecureFormWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};
