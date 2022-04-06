import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SECUREFORM_TITLE_FIELD } from "./SecureFormTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SecureFormShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Private Key" source="privateKey" />
        <TextField label="Public Key" source="publicKey" />
        <TextField label="Structure" source="structure" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SecureFormAnswer"
          target="SecureFormId"
          label="Secure Form Answers"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
