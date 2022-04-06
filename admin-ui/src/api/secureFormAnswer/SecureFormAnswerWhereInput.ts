import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SecureFormWhereUniqueInput } from "../secureForm/SecureFormWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SecureFormAnswerWhereInput = {
  id?: StringFilter;
  payload?: JsonFilter;
  secureForms?: SecureFormWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
