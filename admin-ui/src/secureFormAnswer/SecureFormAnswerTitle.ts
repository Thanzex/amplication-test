import { SecureFormAnswer as TSecureFormAnswer } from "../api/secureFormAnswer/SecureFormAnswer";

export const SECUREFORMANSWER_TITLE_FIELD = "id";

export const SecureFormAnswerTitle = (record: TSecureFormAnswer): string => {
  return record.id || record.id;
};
