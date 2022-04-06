import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SECUREFORM_TITLE_FIELD } from "../secureForm/SecureFormTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SecureFormAnswerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Payload" source="payload" />
        <ReferenceField
          label="SecureForms"
          source="secureform.id"
          reference="SecureForm"
        >
          <TextField source={SECUREFORM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
