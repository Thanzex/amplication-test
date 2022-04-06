import { SecureFormWhereInput } from "./SecureFormWhereInput";
import { SecureFormOrderByInput } from "./SecureFormOrderByInput";

export type SecureFormFindManyArgs = {
  where?: SecureFormWhereInput;
  orderBy?: Array<SecureFormOrderByInput>;
  skip?: number;
  take?: number;
};
