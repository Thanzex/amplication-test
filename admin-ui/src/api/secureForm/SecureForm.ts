import { SecureFormAnswer } from "../secureFormAnswer/SecureFormAnswer";

export type SecureForm = {
  answers?: Array<SecureFormAnswer>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  privateKey: string | null;
  publicKey: string | null;
  structure: string | null;
  updatedAt: Date;
};
