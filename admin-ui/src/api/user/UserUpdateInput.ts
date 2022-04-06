import { SecureFormAnswerUpdateManyWithoutUsersInput } from "./SecureFormAnswerUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  secureFormAnswers?: SecureFormAnswerUpdateManyWithoutUsersInput;
  username?: string;
};
