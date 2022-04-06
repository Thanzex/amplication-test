import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SecureFormTitle } from "../secureForm/SecureFormTitle";
import { UserTitle } from "../user/UserTitle";

export const SecureFormAnswerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="secureform.id"
          reference="SecureForm"
          label="SecureForms"
        >
          <SelectInput optionText={SecureFormTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
