import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SecureFormAnswerListRelationFilter } from "../secureFormAnswer/SecureFormAnswerListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  secureFormAnswers?: SecureFormAnswerListRelationFilter;
  username?: StringFilter;
};
