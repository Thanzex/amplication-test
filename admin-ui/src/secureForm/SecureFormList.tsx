import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SecureFormList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SecureForms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Private Key" source="privateKey" />
        <TextField label="Public Key" source="publicKey" />
        <TextField label="Structure" source="structure" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
