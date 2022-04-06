import { SecureFormAnswer } from "../secureFormAnswer/SecureFormAnswer";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  secureFormAnswers?: Array<SecureFormAnswer>;
  updatedAt: Date;
  username: string;
};
