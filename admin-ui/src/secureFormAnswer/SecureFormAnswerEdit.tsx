import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SecureFormTitle } from "../secureForm/SecureFormTitle";
import { UserTitle } from "../user/UserTitle";

export const SecureFormAnswerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
