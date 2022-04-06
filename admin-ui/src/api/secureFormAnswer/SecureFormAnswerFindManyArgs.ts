import { SecureFormAnswerWhereInput } from "./SecureFormAnswerWhereInput";
import { SecureFormAnswerOrderByInput } from "./SecureFormAnswerOrderByInput";

export type SecureFormAnswerFindManyArgs = {
  where?: SecureFormAnswerWhereInput;
  orderBy?: Array<SecureFormAnswerOrderByInput>;
  skip?: number;
  take?: number;
};
