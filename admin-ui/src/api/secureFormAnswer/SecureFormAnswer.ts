import { JsonValue } from "type-fest";
import { SecureForm } from "../secureForm/SecureForm";
import { User } from "../user/User";

export type SecureFormAnswer = {
  createdAt: Date;
  id: string;
  payload: JsonValue;
  secureForms?: SecureForm | null;
  updatedAt: Date;
  user?: User;
};
