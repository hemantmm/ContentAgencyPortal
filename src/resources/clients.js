import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ClientList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="industry" />
      <TextField source="goals" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ClientEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="industry" />
      <TextInput source="goals" />
    </SimpleForm>
  </Edit>
);

export const ClientCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="industry" />
      <TextInput source="goals" />
    </SimpleForm>
  </Create>
);
