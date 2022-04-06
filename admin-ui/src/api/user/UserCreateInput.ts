import { SecureFormAnswerCreateNestedManyWithoutUsersInput } from "./SecureFormAnswerCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  secureFormAnswers?: SecureFormAnswerCreateNestedManyWithoutUsersInput;
  username: string;
};
