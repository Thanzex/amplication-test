import { SecureForm as TSecureForm } from "../api/secureForm/SecureForm";

export const SECUREFORM_TITLE_FIELD = "name";

export const SecureFormTitle = (record: TSecureForm): string => {
  return record.name || record.id;
};
