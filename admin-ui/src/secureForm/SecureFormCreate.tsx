import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { SecureFormAnswerTitle } from "../secureFormAnswer/SecureFormAnswerTitle";

export const SecureFormCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="answers"
          reference="SecureFormAnswer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SecureFormAnswerTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="Private Key" multiline source="privateKey" />
        <TextInput label="Public Key" multiline source="publicKey" />
        <TextInput label="Structure" source="structure" />
      </SimpleForm>
    </Create>
  );
};
