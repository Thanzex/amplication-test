import { SecureFormAnswerListRelationFilter } from "../secureFormAnswer/SecureFormAnswerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SecureFormWhereInput = {
  answers?: SecureFormAnswerListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  privateKey?: StringNullableFilter;
  publicKey?: StringNullableFilter;
  structure?: StringNullableFilter;
};
