import { SortOrder } from "../../util/SortOrder";

export type SecureFormOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  privateKey?: SortOrder;
  publicKey?: SortOrder;
  structure?: SortOrder;
  updatedAt?: SortOrder;
};
